const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function getCombination(arr, count) {
  const result = [];
  if (count === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, count - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

function sum(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function solution(inputs) {
  const numList = inputs.split('\n').map(Number);

  return getCombination(numList, 7)
    .filter((list) => {
      return sum(list) === 100;
    })[0]
    .join('\n');
}

console.log(solution(inputs));

// module.exports = solution;
