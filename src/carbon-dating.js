const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!sampleActivity || isNaN(sampleActivity)) return false
  if (typeof sampleActivity !== 'string')return false
  let n = sampleActivity * 1
  if (typeof n !== 'number')return false
  if(n>15 || n<=0)return false

  const lambda = Math.log(2) / HALF_LIFE_PERIOD
  const result =  Math.ceil(1 / lambda * Math.log(MODERN_ACTIVITY / n))

  console.log(`samplAct: ${n}`)
  console.log(`result: ${result}`)
  return result
}

module.exports = {
  dateSample
};
