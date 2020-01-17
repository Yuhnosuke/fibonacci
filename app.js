'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n > 1) {
    return fib(n - 2) + fib(n - 1);
  }
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
