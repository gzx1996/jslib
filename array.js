module.exports = {
  /**
   * 返回数组每个项对应的频率
   * @param {array} array 
   */
  arrayFrequencies(array) {
    return array.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {});
  },
  /**
   * 将一定格式（带父级）的数组转化为obj树结构的方法
   * @param {array} items 具有一定格式的obj数组
   * @param {string} keyName 主键
   * @param {string} parentKeyName 储存父级关系的属性
   */
  buildTree(items, keyName = 'id', parentKeyName = 'parent', value = null ) {
    return items.filter(item => item[parentKeyName] === value).map(item => ({ ...item, children: this.buildTree(items, keyName,parentKeyName, item[keyName]) }))
  },
  /**
   * 数组全排列
   * @param {array} arr
   */
  arrayPermutations(arr) {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          this.arrayPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
        ),
      []
    );
  },
  /**
   * 根据arr中元素的某个属性或者方法，统计个数
   * @param {array} arr 
   * @param {prototype} fn 
   */
  countBy(arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  }
  

}