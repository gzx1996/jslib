module.exports = {
  /**
   * 深度获取对象的值
   * @param {object} obj 
   * @param {string} str 
   * @param {any} defaultVal
   */
  objGet(obj, str, defaultVal = null) {
    let keys = str.split('.');
    return keys.reduce(
        (object, index) => (object && object[index] !== null && object[index] !== undefined ? object[index] : defaultVal),
        obj
    );
  },
  /**
   * 深度冻结对象的某个属性
   * @param {object} obj
   */
  objFreeze(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') this.objFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  },
  /**
   * 深拷贝obj
   * @param {object} obj 
   */
  objClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  /**
   * obj转url参数
   * @param {object} obj 
   * @param {string} url 
   */
  objToQueryString(obj, url = '', encode = false) {
    let str = ''
    if(typeof obj == 'object'){
        for(let i in obj){
            if(typeof obj[i] != 'function' && typeof obj[i] != 'object'){
                str += i + '=' + obj[i] + '&' ;
            }else if (typeof obj[i] == 'object'){
                nextStr = '';
                str += subFunc.objToQueryString.handelSon(i, obj[i], encode)
            }
        }
    }
    let res = str.replace(/&$/g, '')
    if (!url) return res;
    if (url && url.includes('?')) return url + res;
    if (url && !url.includes('?')) return url + '?' + res;
  },
  /**
   * 判断object是否有某个key
   * @param {object} obj 
   * @param {string} str 
   */
  hasKey(obj, str) {
    let keys = str.split('.')
    return (
      keys.length > 0 &&
      keys.every(key => {
        if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
        obj = obj[key];
        return true;
      })
    );
  }

}

const subFunc = {
  objToQueryString: {
    handelSon(objName, objValue, encode = false){
      if(typeof objValue == 'object'){
          for(let i in objValue){
              if(typeof objValue[i] != 'object'){
                  let value = objName + '[' + i + ']=' + objValue[i];
                  nextStr += encode ? encodeURI(value) + '&' : value + '&' ;
              }else{
                this.handelSon(objName + '[' + i + ']', objValue[i]);
              }
          }
      }
      return nextStr;
    }
  }
}
