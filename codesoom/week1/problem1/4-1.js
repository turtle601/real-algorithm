function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn();
  }

  return fn;
}

function reduceRecursive(array, reducer, acc, index = 0) {
  return () => {
    if (index >= array.length) return acc;
    const nextAcc = reducer(acc, array[index], index, array);
    return reduceRecursive(array, reducer, nextAcc, index + 1);
  };
}

function reduceTail(array, reducer, initialValue) {
  return trampoline(() => reduceRecursive(array, reducer, initialValue));
}

function solution(numbers) {
  return reduceTail(numbers, (acc, cur) => acc + cur, 0);
}

module.exports = solution;
