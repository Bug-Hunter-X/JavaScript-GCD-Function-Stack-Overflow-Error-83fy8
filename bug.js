function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Correctly returns 0
console.log(foo(10, 15)); // Correctly returns 5
console.log(foo(10, 0)); // Stack overflow error!