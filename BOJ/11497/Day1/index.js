const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function getGap(arr) {
  const result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i] - arr[i-1]);
  }

  return Math.max(...result);
}

function solution(inputs) {
  const inputList = inputs.split('\n');
  const T = Number(inputList[0]);

  const result = [];

  for (let i = 1; i <= T; i++) {
    const N = Number(inputList[i * 2 - 1]);
    const list = inputList[i * 2].split(' ').map(Number);
    const sortedList = list.sort((x, y) => (x - y));
    const evenList = [sortedList[0], ...sortedList.filter((_,i) => i % 2 === 0)]
    const oddList = sortedList.filter((_,i) => i % 2 !== 0);

    result.push(Math.max(...[getGap(evenList), getGap(oddList), Math.abs(evenList.at(-1) - oddList.at(-1))]));
  }

  return result.join('\n');
}

console.log(solution(inputs));

// module.exports = solution;