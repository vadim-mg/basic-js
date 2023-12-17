const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const first = Array.from(s1).reduce((acc, val)=>{
    acc[val] = acc[val] ? acc[val] + 1 : 1
    return acc
  }, {})
  return Array.from(s2).reduce((acc, val) =>{
    hasOne = !!first[val]
    if(hasOne){
      first[val] -= 1
    }
    return acc + hasOne
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
