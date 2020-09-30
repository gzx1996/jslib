module.exports = {
  /**
   * url参数转obj
   * @param {string} url 
   */
  getURLParams(url) {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
      {}
    )
  },
  /**
   * obj转url参数
   * @param {object} obj 
   * @param {string} url 
   */
  objToQueryString(obj, url = '', encode = false) {
    let str = ''
    if(typeof obj == 'object'){
        for(let i in obj){
            if(typeof obj[i] != 'function' && typeof obj[i] != 'object'){
                str += i + '=' + obj[i] + '&' ;
            }else if (typeof obj[i] == 'object'){
                nextStr = '';
                str += subFunc.objToQueryString.handelSon(i, obj[i], encode)
            }
        }
    }
    let res = str.replace(/&$/g, '')
    if (!url) return res;
    if (url && url.includes('?')) return url + res;
    if (url && !url.includes('?')) return url + '?' + res;
  },
  /**
   * 验证url是否是绝对路径
   * @param {string} url 需要校验的url
   */
  isAbsoluteURL(url) {
    return /^[a-z][a-z0-9+.-]*:/.test(str);
  }
}