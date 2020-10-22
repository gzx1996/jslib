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
  objClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  /**
   * 判断object是否有某个key
   * @param {object} obj 
   * @param {string} str 
   */
  hasKey(obj, str) {
    let keys = str.split('.')
    return (
      keys.length > 0 &&
      keys.every(key => {
        if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;
        obj = obj[key];
        return true;
      })
    );
  },
  /**
   * obj扁平化
   * @param {object} obj 
   */
  flattenObject (obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? `${prefix}.` : '';
      if (
        typeof obj[k] === 'object' &&
        obj[k] !== null &&
        Object.keys(obj[k]).length > 0
      )
        Object.assign(acc, this.flattenObject(obj[k], pre + k));
      else acc[pre + k] = obj[k];
      return acc;
    }, {})
  },
  /**
   * 扁平obj立体化
   * @param {*} obj 
   * @param {*} arr 
   */
  unflattenObject (obj) {
    return  Object.keys(obj).reduce((res, k) => {
      k.split('.').reduce(
        (acc, e, i, keys) =>
          acc[e] ||
          (acc[e] = isNaN(Number(keys[i + 1]))
            ? keys.length - 1 === i
              ? obj[k]
              : {}
            : []),
        res
      );
      return res;
    }, {})
  },
  /**
   * 生成含有当前obj部分属性的obj
   * @param {object} obj 
   * @param {array} arr 
   */
  initSubObj(obj, arr) {
    return  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
  },
  /**
   * 比较两个obj区别, 并返回是否相等
   */
  objCompare(o1, o2) {
    const diff = {};
    o1 = this.flattenObject(o1);
    o2 = this.flattenObject(o2);
    let keys = Object.keys(o1).concat(Object.keys(o2))
    keys.forEach(key => {
      if ((o1[key] !== undefined && o1[key] !== null) && (o2[key] === undefined || o2[key] === null)) {
        diff[key] = [o1[key], null];
      }
      if ((o2[key] !== undefined && o2[key] !== null) && (o1[key] === undefined || o1[key] === null)) {
        diff[key] = [null, o2[key]]
      }
      if ((o1[key] !== undefined && o1[key] !== null) && (o2[key] !== undefined && o2[key] !== null)) {
        if (o1[key] !== o2[key]) {
          diff[key] = [o1[key], o2[key]]
        }
      }
    })
    return { diff, isEqual: Object.keys(diff).length === 0 ? true : false }
  }
}

const subFunc = {
  objToQueryString: {
    handelSon(objName, objValue, encode = false){
      if(typeof objValue == 'object'){
          for(let i in objValue){
              if(typeof objValue[i] != 'object'){
                  let value = objName + '[' + i + ']=' + objValue[i];
                  nextStr += encode ? encodeURI(value) + '&' : value + '&' ;
              }else{
                this.handelSon(objName + '[' + i + ']', objValue[i]);
              }
          }
      }
      return nextStr;
    }
  }
}
