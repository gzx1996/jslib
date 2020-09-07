module.exports = {
  /**
   * 获取带期望的随机数, 仅支持整数
   * @param {number} min 
   * @param {number} max 
   * @param {number} expected 
   */
  getRandomWithExpection(min, max, expected) {
    const random = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let d = 0
    if (random(min, max) <= expected) d = random(min, max)
    else d = random(min, parseInt(((2 * expected * (max - min) - (expected - min) * (max + min)) / (max - expected)) - min))
    return d
  }
}
