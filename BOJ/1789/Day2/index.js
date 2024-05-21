const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  let sum = 0;
  let count = 0;
  const N = Number(input);
  
  for (let i = 1; i < N; i++) {
    sum += i;
    count += 1;

    if (sum > N) {
      break;
    }
  }
  
  return count - 1;
}

console.log(solution(input));

// module.exports = solution;