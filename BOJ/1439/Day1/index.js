// const input = require('fs').readFileSync(0, 'utf-8').trim();

const regexOne = /1/g;
const regexZero = /0/g;

function solution(input) {
  const oneBlockCount = input
    .split(regexOne)
    .filter((value) => value !== '').length;

  const zeroBlockCount = input
    .split(regexZero)
    .filter((value) => value !== '').length;

  return Math.min(oneBlockCount, zeroBlockCount);
}

// console.log(solution(input));

module.exports = solution;
