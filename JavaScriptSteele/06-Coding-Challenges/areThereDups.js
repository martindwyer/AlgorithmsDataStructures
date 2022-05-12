function areThereDups() {
  let args = [...arguments];
  let argMap = {};
  for (let item of args) {
    argMap[item] ? (argMap[item] += 1) : (argMap[item] = 1);
  }
  for (let key in argMap) {
    if (argMap[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDups(1, 2, 3)); //false
console.log(areThereDups(1, 2, 2)); // true
console.log(areThereDups("a", "b", "c", "a")); // true
