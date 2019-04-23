/**
 * makes working with paths easier, paths are assumed to be relative
 */
class Path {
  constructor(pathStr) {
    this.parts = pathStr.split('/')
  }

  getDepth() {
    return this.parts.length
  }

  setRoot(root) {
    let parts = root.split('/')
    for(let i = 0; i < parts.length; i++) {
      this.parts[i] = parts[i]
    }

    return this
  }

  getPath() {
    let res = ''
    let part
    for(let i = 0; i < this.parts.length; i++) {
      part = this.parts[i]
      res += part
      if(i != this.parts.length - 1) {
        res += '/'
      }
    }
    return res
  }
}

module.exports = Path
