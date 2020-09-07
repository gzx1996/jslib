module.exports = {
  /**
   * 深度获取对象的值
   * @param {object} obj 
   * @param {string} str 
   * @param {any} defaultVal
   */
  objGet(obj, str, defaultVal = null) {
    let keys = str.split('.');
    return keys.reduce(
        (object, index) => (object && object[index] !== null && object[index] !== undefined ? object[index] : defaultVal),
        obj
    );
  },
  /**
   * 深度冻结对象的某个属性
   * @param {object} obj
   */
  objFreeze(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') this.objFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  },
  /**
   * 深拷贝obj
   * @param {object} obj 
   */
  objClone(obj ) {
    return JSON.parse(JSON.stringify(obj));
  },

}