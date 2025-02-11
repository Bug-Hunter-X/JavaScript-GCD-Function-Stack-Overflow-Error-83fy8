function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Correctly returns 2
console.log(foo(10, 15)); // Correctly returns 5
console.log(foo(10, 0)); // Correctly returns 10