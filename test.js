let objFunc = require('./obj');

let obj = {
  a: 1,
  b: {
    c: 2
  }
}

console.log(obj.a)

objFunc.objFreeze(obj, 'a')

obj['a'] = 3
obj['b'] = 6

console.log(obj.a)
console.log(obj.b)