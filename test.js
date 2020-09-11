let func = require('./index')


let arr = [
  {
    name: '大头儿子',
    father: '小头爸爸'
  }, 
  {
    name: '小头爸爸',
    father: '中头爷爷'
  }, 
  {
    name: '中头爷爷',
    father: null
  }
]
let res =  func.buildTree(arr, 'name', 'father')
console.log(JSON.stringify(res))