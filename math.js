module.exports = {
  /**
   * 获取带期望的随机数, 仅支持整数
   * @param {number} min 
   * @param {number} max 
   * @param {number} mean 
   */
  getRandomWithMean(min, max, mean) {
    const random = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let d = 0
    if (random(min, max) <= mean) d = random(min, max)
    else d = random(min, parseInt(((2 * mean * (max - min) - (mean - min) * (max + min)) / (max - mean)) - min))
    return d
  }
}
