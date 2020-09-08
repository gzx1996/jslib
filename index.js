const objFunc = require('./obj');
const mathFunc = require('./math');
const urlFunc = require('./url');
const stringFunc = require('./string')

module.exports = {
  ...objFunc,
  ...mathFunc,
  ...urlFunc,
  ...stringFunc
}