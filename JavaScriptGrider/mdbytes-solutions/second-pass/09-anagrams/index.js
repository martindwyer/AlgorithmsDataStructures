// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/^a-zA-Z/g, "").toLowerCase();
  let strB = stringB.replace(/^a-zA-Z/g, "").toLowerCase();
  let strAMap = {};
  for (let c of strA) {
    strAMap[c] ? (strAMap[c] += 1) : (strAMap[c] = 1);
  }
  let strBMap = {};
  for (let d of strB) {
    strBMap[d] ? (strBMap[d] += 1) : (strBMap[d] = 1);
  }
  console.log("a", strAMap);
  console.log("b", strBMap);
  for (let e of strB) {
    if (strAMap[e] != strBMap[e]) return false;
  }
  for (let f of strA) {
    if (strAMap[f] != strBMap[f]) return false;
  }

  return true;
}

console.log(anagrams("A tree, a life, a bench", "A tree, a fence, a yard"));

module.exports = anagrams;
