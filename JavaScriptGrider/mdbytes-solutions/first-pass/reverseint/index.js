// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString();
  let sgn = Math.sign(n);
  let rev = "";
  if (n < 0) {
    str = str.substring(1);
  }
  rev = str.split("").reverse().join("");
  return Number(rev) * sgn;
}

module.exports = reverseInt;
