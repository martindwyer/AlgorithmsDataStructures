// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let solution = "";
  for (let char of str) {
    solution = char + solution;
    debugger;
  }
  return solution;
}

reverse("asdf");

module.exports = reverse;

/*
A simple solution:
return str.split('').reverse().join('')

*/

/*
My first solution
let solution = "";
for (var i = str.length - 1; i >= 0; i--) {
  solution += str[i];
}
return solution;
*/

// Steven's preferred solution
// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
