function numberCompare(a, b) {
  return a - b;
}

arr = [6, 4, 15, 10];

// 6 - 4 > 0 => 4 goes first
// 6 - 15 < 0 => 6 goes first
// 15 - 10 > 0 => 10 goes first

arr.sort(numberCompare);

console.log(arr);
