function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn();
  }

  return fn;
}

function fibonacci(n, a = 0, b = 1) {
  return () => {
    if (n <= 0) return a;
    if (n === 1) return b;

    return fibonacci(n - 1, b, a + b);
  };
}

function solution(n) {
  return trampoline(() => fibonacci(n));
}

module.exports = solution;
