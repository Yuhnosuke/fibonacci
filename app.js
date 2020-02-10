'use strict';

var Fib = function () {
  this.memo = new Map();
  this.memo.set(0, 0);
  this.memo.set(1, 1);
}

Fib.prototype.calc = function (n) {
  if (this.memo.has(n)) {
    return this.memo.get(n);
  }
  const value = this.calc(n - 1) + this.calc(n - 2);
  this.memo.set(n, value);
  return value;
}

const f = new Fib();

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(f.calc(i));
}
