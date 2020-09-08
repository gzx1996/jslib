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
}