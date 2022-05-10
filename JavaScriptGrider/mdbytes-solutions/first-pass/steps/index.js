// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps (n) {
  let output = ''

  for (let row = 0; row < n; row++) {
    output = ''
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        output += '#'
      } else {
        output += ' '
      }
    }
    console.log(output)
  }
}

module.exports = steps

// Stephen's recursive solution ... no more elegant that the
// straightforward Solution
// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }
//
//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//   }
//
//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }
//   steps(n, row, stair);
// }

// Solution #2: A refinement on the loop approach
//
// function steps(n) {
//   let output = "";
//
//   for (let row = 0; row < n; row++) {
//     output = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         output += "#";
//       } else {
//         output += " ";
//       }
//     }
//     console.log(output);
//   }
// }

// My first solution
//
// function steps(n) {
//   let output = "";
//
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       output += "#";
//     }
//     for (let k = 1; k <= n - i; k++) {
//       output += " ";
//     }
//     console.log(output);
//     output = "";
//   }
// }
