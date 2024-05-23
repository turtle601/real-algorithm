// const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const S = Number(input);
  let sum = 0;
  let N = 0;

  for (let i = 1; i < S; i++) {
    sum += i;

    if (sum <= S) {
      N += 1;
    }
  }

  return sum > S ? N : N + 1;
}

// console.log(solution(input));

module.exports = solution;
