function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn();
  }

  return fn;
}

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function solution(n) {
  return trampoline(() => fibonacci(n));
}

module.exports = solution;
