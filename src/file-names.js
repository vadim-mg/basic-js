const { NotImplementedError } = require("../extensions/index.js")

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mem = {}
  const rename = (name) => {
    if (mem[name]) {
      const result = `${name}(${mem[name]})`
      mem[name] += 1
      if (!mem[result]) {
        mem[result] = 1
        return result
      } else {
        return rename(result)
      }
    }
    mem[name] = 1
    return name
  }

  return names.map((val) => rename(val))
}

module.exports = {
  renameFiles,
}
