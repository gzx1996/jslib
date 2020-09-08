module.exports = {
  /**
   * 获取字符串全排列
   * @param {string} str
   */
  anagrams(str) {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
      acc.concat(this.anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
  }
}