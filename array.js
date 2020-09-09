module.exports = {
  /**
   * 将一定格式（带父级）的数组转化为obj树结构的方法
   * @param {array} items 具有一定格式的obj数组
   * @param {string} keyName 主键
   * @param {string} parentKeyName 储存父级关系的属性
   */
  buildTree(items, keyName = 'id', parentKeyName = 'parent', value = null ) {
    return items.filter(item => item[parent] === value).map(item => ({ ...item, children: this.buildTree(items, keyName,parentKeyName, item[key]) }))
  }  
}