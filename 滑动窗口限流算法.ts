abstract class WindowLimiter {
    private _timeSpan: number;
    private _capacity: number;
    constructor(timeSpan: number, capacity: number) {
        this._timeSpan = timeSpan;
        this._capacity = capacity;
    }

    public getTimeSpan(): number {
        return this._timeSpan;
    }

    public getCapacity(): number {
        return this._capacity;
    }

    abstract getCurrentCapacity(): number;

    abstract insert(): boolean;
    
}

class WindowLimiterGlobal extends WindowLimiter {
    private _list: number[] = [];
    constructor(timeSpan: number, capacity: number) {
        super(timeSpan, capacity);
    }

    getCurrentCapacity(): number {
        return this._list.length;
    };

    insert(): boolean {
        let timestamp: number = new Date().valueOf();
        let first = this._list[0] || null;
        const timeSpan = this.getTimeSpan();
        const capacity = this.getCapacity();
        if (!first) {
            this._list.push(timestamp);
            return true
        } else {
            if (timestamp - first <= timeSpan) {
                if (this._list.length < capacity) {
                    this._list.push(timestamp);
                    return true;
                } else {
                    return false;
                }
            } else {
                this._list = this._list.filter(x => x >= timestamp - capacity);
                if (this._list.length < capacity) {
                    this._list.push(timestamp);
                    return true;
                } else {
                    return false;
                }
            }
        }
    
    };
}

const limiter = new WindowLimiterGlobal(1000, 20);
let counter = 0;

setInterval(() => {
    counter ++;
    console.log(`第${counter}次请求开始`);
    const rs = limiter.insert();
    console.log(`第${counter}次请求, 限制器返回结果${rs}`);
}, 30)

