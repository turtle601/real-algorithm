const input = require('fs').readFileSync(0, 'utf-8').trim();

function getCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map(element => [element]);
  
  const result = [];

  arr.forEach((fixed, fixedIdx, array) => {
    const rest = array.slice(fixedIdx + 1);
    const combinationOfRest = getCombinations(rest, selectNum - 1);
    const combineList = combinationOfRest.map((elementArr) => [fixed, ...elementArr]);
    result.push(...combineList);
  })

  return result;
}


function solution(input) {
  const [N,M] = input.split(' ').map(Number);
  const list = Array(N).fill(0).map((_, i) => i + 1);

  return getCombinations(list, M).map(value => value.join(' ')).join('\n')
}

console.log(solution(input));

// module.exports = solution;
