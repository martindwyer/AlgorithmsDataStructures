// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strSolution = "";
  let nextChar = false;
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || nextChar) {
      strSolution += str.slice(i, i + 1).toUpperCase();
      nextChar = false;
    } else {
      strSolution += str.slice(i, i + 1);
      if (str.slice(i, i + 1) === " ") {
        nextChar = true;
      } else {
        nextChar = false;
      }
      console.log(nextChar);
    }
  }
  return strSolution;
}

console.log(capitalize("look, it is working!"));

module.exports = capitalize;
