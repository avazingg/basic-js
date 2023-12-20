const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let str = '';
  let arr = [];
  let resultArray = [];
  let counter = 0;
  let result = {};
  for (let i = 0; i < domains.length; i++) {
      arr = domains[i].split('.').reverse();
      for (let j = 0; j < arr.length; j++) {
          str += '.'+arr[j];
          resultArray.push(str);
      }
      str = '';
  }
  for (let i = 0; i < resultArray.length; i++) {
      // for (let j = 0; j < resultArray.length; j++){
      //     counter += 1;
      // }
      counter = resultArray.filter(elem => elem === resultArray[i]).length;
      result[resultArray[i]] =counter;
      counter = 0;
  }
 
  console.log(counter);
  return result;
}

module.exports = {
  getDNSStats
};
