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
  if (arguments.length == 0 || isNaN(Number(sampleActivity)) || !(typeof sampleActivity == 'string' || sampleActivity == 'null')) {
    return false
  }
  else if (Number(sampleActivity) >= 15 || Number(sampleActivity) < 1) {
    return false
  }
  else {
    const k = 0.693 / HALF_LIFE_PERIOD
    let t = (Math.log(sampleActivity / MODERN_ACTIVITY)) / (-1 * k)
    return Math.ceil(t)
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
