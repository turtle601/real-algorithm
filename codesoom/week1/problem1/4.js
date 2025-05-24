function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn();
  }

  return fn;
}

function reduceRecursive(numbers, acc = 0) {
  return () => {
    if (numbers.length === 0) return acc;

    return reduceRecursive(numbers.slice(1), acc + numbers[0]);
  };
}

function solution(numbers, acc = 0) {
  return trampoline(() => reduceRecursive(numbers));
}

module.exports = solution;
