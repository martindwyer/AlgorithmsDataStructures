function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  if (n > arr.length) return null;
  if (arr.length === n) {
    return arr.reduce((a, b) => a + b, 0);
  }
  if (arr.length === 1) {
    return arr[0];
  }
  if (n === 1) {
    return Math.max(...arr);
  }

  let i = 0;
  let j = n - 1;
  let max = -100000000000000;
  while (j < arr.length) {
    let sum = 0;
    let k = i;
    while (k < j + 1) {
      sum += arr[k];
      k += 1;
    }
    if (sum > max) {
      max = sum;
    }
    i = i + 1;
    j = i + n - 1;
  }
  return max;
}

console.log("\nMax sub array");
console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6], 4)); //13
