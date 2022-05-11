function charCount(str) {
  var obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char] + 1 || 1;
    }
  }

  return obj;
}

console.log(charCount("It'ss a wondderful daay!"));
