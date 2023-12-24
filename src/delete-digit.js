const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = Array.from(n.toString())
  const resultNumbers = Array(numbers.length).fill("")
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      const ch = String(i !== j ? numbers[j] : "")
      resultNumbers[i] += ch
    }
  }

  return Math.max(...resultNumbers.map(val => Number(val)))
}


module.exports = {
  deleteDigit,
}
