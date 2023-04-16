const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes * 1 : 1
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes * 1 : 1
  const separator = options.separator ? '' + options.separator : '+'
  const additionSeparator = options.additionSeparator ? ''+ options.additionSeparator : '|'
  const addition = options.addition !== undefined ? '' + options.addition : ''
  const suffix = Array(additionRepeatTimes).fill(addition).join(additionSeparator)
  const word = '' + str + suffix
  const result = Array(repeatTimes).fill(word).join(separator)
  return(result)


}

module.exports = {
  repeater
};
