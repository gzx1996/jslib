let func = require('./index')

// let p = [{
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     },
//     f: [4,5,6]
//   }
// }, {
//   g: {
//     h: 7
//   }
// }]

// let q = [{
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 999
//     },
//     f: [4,5,6]
//   }
// }, {
//   g: {
//     h: 8
//   }
// }]

// console.log(func.obj.objCompare(p, q))




console.log(func.obj.unflattenObject({ diff: { '0.b.d.e': [ 3, 999 ], '1.g.h': [ 7, 8 ] }, isEqual: false }))