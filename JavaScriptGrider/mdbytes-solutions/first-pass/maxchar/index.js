// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let counts = {};
  let max = 0;
  let charMax = "";

  for (let char of str) {
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  for (let char in counts) {
    if (counts[char] > max) {
      max = counts[char];
      charMax = char;
    }
  }

  return charMax;
}

module.exports = maxChar;
