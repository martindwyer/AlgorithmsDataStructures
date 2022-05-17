// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strMap = {};
  for (let c of str) {
    strMap[c] ? (strMap[c] += 1) : (strMap[c] = 1);
  }
  let maxChar;
  let maxCount = 0;
  for (let key in strMap) {
    if (strMap[key] > maxCount) {
      maxChar = key;
      maxCount = strMap[key];
    }
  }
  return maxChar;
}

module.exports = maxChar;
