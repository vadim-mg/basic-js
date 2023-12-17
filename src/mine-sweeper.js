const { NotImplementedError } = require("../extensions/index.js")

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const cells = []
  for(let i = 0; i< matrix.length; i+=1){
   cells[i] = Array(matrix[0].length).fill(0)
  }
  for (let ri = 0; ri < matrix.length; ri += 1) {
    for (let ci = 0; ci < matrix[ri].length; ci += 1) {
      if (matrix[ri][ci]) {
        matrix[ri][ci] = false
        if (ri > 0) {
          cells[ri - 1][ci] += 1
          if (ci > 0) {
            cells[ri - 1][ci - 1] += 1
          }
          if (ci < matrix[ri].length - 1) {
            cells[ri - 1][ci + 1] += 1
          }
        }
        if (ri < matrix.length - 1) {
          cells[ri + 1][ci] += 1
          if (ci > 0) {
            cells[ri + 1][ci - 1] += 1
          }
          if (ci < matrix[ri].length - 1) {
            cells[ri + 1][ci + 1] += 1
          }
        }

        if (ci > 0) {
          cells[ri][ci - 1] += 1
        }
        if (ci < matrix[ri].length - 1) {
          cells[ri][ci + 1] += 1
        }
      }
    }
  }
  return cells
}


module.exports = {
  minesweeper,
}
