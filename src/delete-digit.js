const { NotImplementedError } = require('../extensions/index.js');

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
  n = String(n)
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(n.substring(0, i) + n.substring(i + 1, n.length))

  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i]
  }
  arr = arr.sort(function (a, b) { return b - a })
  return (arr[0])
}

module.exports = {
  deleteDigit
};
