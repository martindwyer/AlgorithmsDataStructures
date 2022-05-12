function capitalizeWords(strArray) {
  return strArray.map((a) => a.toUpperCase());
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
