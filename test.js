let func = require('./index')


let a = {
  a:1,
  b:2,
  c:3
}

console.log(func.url.objToQueryString(a))