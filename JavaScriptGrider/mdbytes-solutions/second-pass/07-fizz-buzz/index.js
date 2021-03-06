// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let j = 1; j <= n; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
      console.log("fizzbuzz");
    } else if (j % 3 === 0) {
      console.log("fizz");
    } else if (j % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(j);
    }
  }
}

console.log(fizzBuzz("5"));
module.exports = fizzBuzz;
