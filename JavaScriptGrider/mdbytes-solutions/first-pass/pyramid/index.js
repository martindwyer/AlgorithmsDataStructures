// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid (n) {
  let rows = n
  let cols = n * 2 - 1
  let rowOutput = ''
  for (let i = 1; i <= rows; i++) {
    rowOutput = ''
    for (let j = 1; j <= cols; j++) {
      if (j <= n - i || j >= n + i) {
        rowOutput += ' '
      } else {
        rowOutput += '#'
      }
    }
    console.log(rowOutput)
  }
}

module.exports = pyramid
