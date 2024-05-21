const input = require('fs').readFileSync(0, 'utf-8').trim();

function getPermutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((element) => [element]);

  const result = [];

  arr.forEach((fixed, selectedIndex, array) => {
    const rest = array.filter((_, idx) => selectedIndex !== idx);
    const perm = getPermutation(rest, selectNum - 1);
    const combineList = perm.map((elementArr) => [fixed, ...elementArr])
    result.push(...combineList);
  });

  return result;
}

function solution(input) {
  const [N,M] = input.split(' ').map(Number);
  const list = Array(N).fill(0).map((v, i) => i + 1);
  return getPermutation(list, M).map(value => value.join(' ')).join('\n');
}

console.log(solution(input));

// module.exports = solution;
