function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
