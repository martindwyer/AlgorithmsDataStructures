console.log("runnning app");

function addUpToN(n) {
  // one op => assignment
  let sum = 0;

  // n comparisons, n increments of i (+=)
  for (let i = 0; i < n; i++) {
    // n operations (+=)
    sum += i;
  }
  return sum; // total ops => 5n + 1
}

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Start with 6 zeros after 1 for n
 * Increment by adding one zero to n
 * Watch the time for addUpToN increase
 * The time for addUpTo remains very close to zero
 */

var t1 = performance.now();
addUpToN(100000000);
var t2 = performance.now();
addUpTo(100000000);
var t3 = performance.now();

var firstTime = t2 - t1;
var secondTime = t3 - t2;

console.log(firstTime);
console.log(secondTime);
console.log(firstTime > secondTime);

/**
 * Timing code issues:
 * 1. Different machines will record different times.
 * 2. The same machine will record different times.
 * 3. For fast algorithms, speed measurements may not be precise enough.
 *
 * The solution:
 * Count the number of simple operations required.
 *
 * addUpTo(n) => n * (n + 1) / 2    =>  has three operations
 *
 * addUpToN(n) =>  5n + 1
 *
 */
