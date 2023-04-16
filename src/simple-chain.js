const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (!this.arr) {
      this.arr = []
    }
    const val = "" + value
    this.arr.push(`${val}`)
    return this
  },
  removeLink(position) {
    const pos = position - 1
    if (!position || Number.isNaN(pos)|| pos < 0 || pos >= this.arr.length ) {
      this.arr.splice(0, this.arr.length)
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(pos, 1)
    return this
  },
  reverseChain() {
    if (!this.arr) {
      this.arr = []
    }
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    const result = this.arr.map((val) => `( ${val} )`).join("~~")
    this.arr.splice(0, this.arr.length)
    return result
  },
}

module.exports = {
  chainMaker,
}

