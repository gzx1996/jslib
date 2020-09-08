let objFunc = require('./obj');

let obj = {
  a: 1,
  b: [2,3],
  c: {
    d: [4, 5, 6],
    e: 7
  }
}

console.log(objFunc.objToQueryString(obj))