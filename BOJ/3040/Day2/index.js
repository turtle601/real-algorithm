const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function sum(arr) {
  return arr.reduce((acc, cur) => (acc + cur), 0);
}

function getCombination(arr, selectNum) {
  if (selectNum === 1) return arr.map(element => [element]);

  const result = [];
  
  arr.forEach((fixed, fixedIndex, array) => {
    const rest = array.slice(fixedIndex + 1);
    const combinationsOfRest = getCombination(rest, selectNum - 1);
    const combineList = combinationsOfRest.map((combinationList) => [fixed, ...combinationList]);
    result.push(...combineList);
  })

  return result;
}

function solution(inputs) {
  const inputList = inputs.split('\n').map(Number);

  const combinations = getCombination(inputList, 7);

  for (const combination of combinations) {
    if (sum(combination) === 100) {
      return combination.join('\n');        
    }
    
  }

  return -1;
}

console.log(solution(inputs));

// module.exports = solution;
