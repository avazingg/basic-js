const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  else {
    // remove line with error and write your code here
    let resultArray = []
    let bool = true
    for (let i = 0; i < arr.length; i++) {
      resultArray.push(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
      if (resultArray[i] == '--discard-next' && (resultArray[i + 2] == '--double-prev')) {
        resultArray.splice(i + 2, 1)
      }
      else if (resultArray[i] == '--discard-next' && (resultArray[i + 2] == '--discard-prev')) {
        resultArray.splice(i + 2, 1)
      }
    }
    //console.log(resultArray)
    while (bool) {
      bool = false
      for (let i = 0; i < arr.length; i++) {
        if (resultArray[i] == '--discard-next') {
          if (i + 1 < resultArray.length) {
            resultArray.splice(i, 2);

          }

          else {
            resultArray.splice(i, 1);
          }
          bool = true
        }
        else if (resultArray[i] == '--discard-prev') {
          if (i - 1 >= 0) {
            resultArray.splice(i - 1, 2);
          }
          else {
            resultArray.splice(i, 1)
          }
          bool = true
        }
        else if (resultArray[i] == '--double-next') {
          if (i + 1 < resultArray.length) {
            resultArray.splice(i, 1, resultArray[i + 1]);
          }
          else {
            resultArray.splice(i, 1);
          }
          bool = true

        }
        else if (resultArray[i] == '--double-prev') {
          if (i - 1 >= 0) {
            resultArray.splice(i, 1, resultArray[i - 1]);
          }
          else {
            resultArray.splice(i, 1)
          }
          bool = true
        }


      }
    }
    return resultArray

  }
}

module.exports = {
  transform
};
