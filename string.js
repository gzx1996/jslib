module.exports = {
  /**
   * 获取字符串全排列
   * @param {string} str
   */
  strPermutations(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
      acc.concat(this.anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
  },
  /**
   * 
   * @param {string} cc 需要处理的字符串
   * @param {number} startNum 开头留几个
   * @param {number} endNum 结尾几个
   * @param {string} mask 替换字符
   */
  mask(cc, startNum, endNum, mask = '*'){
    return `${cc}`.slice(0, startNum) + ''.padStart(`${cc}`.length - startNum - endNum, mask) + `${cc}`.slice(-endNum);
  }
}