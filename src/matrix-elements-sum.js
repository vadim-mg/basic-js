const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const addibleColumns = Array(matrix[0].length).fill(true)
  let sum = 0
  for (let ri = 0; ri < matrix.length; ri += 1) {
    for (let ci = 0; ci < matrix[ri].length; ci += 1) {
      if (matrix[ri][ci] && addibleColumns[ci]) {
        sum += matrix[ri][ci]
      } else {
        addibleColumns[ci] = false
      }
    }
  }
  return sum
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]
console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum,
}
