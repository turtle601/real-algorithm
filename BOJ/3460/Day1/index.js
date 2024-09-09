const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const numberList = input.split('\n').map(Number);
  const result = [];

  const numberCase = numberList.slice(1);

  for (let i = 0; i < numberCase.length; i++) {
    const value = numberCase[i]
      .toString(2)
      .split('')
      .map((num, idx, arr) => {
        return num === '1' ? arr.length - idx - 1 : null;
      })
      .filter((v) => v !== null)
      .sort((x, y) => x - y)
      .join(' ');

    result.push(value);
  }

  return result.join('\n');
}

console.log(solution(input));

// module.exports = solution;
