let func = require('./index')


let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += func.math.getRandomWithMean(1, 100, 44);
}
console.log(sum / 100000)