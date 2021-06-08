let func = require('./index')


let arr = [{
    id: 1,
    name: '电单车',
    code: 'ebike',
    parentId: null
}, {
    id: 2,
    name: '车篮',
    code: 'bucket',
    parentId: 1
}, {
    id: 3,
    name: '脚踏板',
    code: 'tt',
    parentId: 1
}, {
    id: 4,
    name: '螺丝',
    code: 'll',
    parentId: 3
}, {
    id: 5,
    name: '自行车',
    code: 'bike',
    parentId: null
}, {
    id: 6,
    name: '坐垫',
    code: 'cushion',
    parentId: 5
}]

let res = func.array.buildTree(arr, 'id', 'parentId');

console.log(JSON.stringify(res))