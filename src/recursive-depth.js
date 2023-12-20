const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter;
    let maxElement = 1;
      for (let i = 0; i < arr.length; i++) {
          counter = 1;
          if (arr[i] instanceof Array) {
          counter += this.calculateDepth(arr[i]);
          //console.log(counter);
        }
        if (counter > maxElement) {
          maxElement = counter;
      }
      }
      return maxElement;
  }
}

module.exports = {
  DepthCalculator
};
