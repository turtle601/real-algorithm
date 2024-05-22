// 새로운 아이디어
// https://gyujh.tistory.com/51

const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  let count = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== input[i + 1]) {
      count += 1;
    }
  }

  return Math.floor((count + 1) / 2);
}

console.log(solution(input));

// module.exports = solution;
