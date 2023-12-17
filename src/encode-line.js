const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeChar = (count, char) => String(count > 1 ? count : '') + char

function encodeLine(str) {
  let result = ''
  let currentChar = ''
  let currentCharCount = 0
  for (let i = 0; i < str.length; i += 1) {
    if(str[i] !== currentChar){
      result += encodeChar(currentCharCount, currentChar)
      currentChar = str[i]
      currentCharCount = 1
    }else{
      currentCharCount += 1;
    }
  }
  return result + encodeChar(currentCharCount, currentChar)
}

module.exports = {
  encodeLine,
}
