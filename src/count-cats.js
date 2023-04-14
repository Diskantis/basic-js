const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let count = 0;
  matrix.forEach( i => i.forEach(j => j === "^^" ? count += 1 : null));
  return count !== 0 ? count : 0
}

module.exports = {
  countCats
};
