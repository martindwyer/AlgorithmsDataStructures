// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let mapA = makeMap(stringA.replace(/[^\w]/g, '').toLowerCase());
    let mapB = makeMap(stringB.replace(/[^\w]/g, '').toLowerCase());

    return compareMaps(mapA, mapB);
}

function makeMap(letters) {
    let map = {};
    for (let letter of letters) {
        if (map[letter]) {
            map[letter] += 1;
        } else {
            map[letter] = 1;
        }
    }
    return map;
}

function compareMaps(mapA, mapB) {
    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }
    for (let letter in mapA) {
        if (mapA[letter] !== mapB[letter]) {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
