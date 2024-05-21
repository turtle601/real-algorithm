const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const zeroBlock = input.split(/0/g).filter(v => v !== '').length;
  const oneBlock =  input.split(/1/g).filter(v => v !== '').length;

  return Math.min(zeroBlock, oneBlock);
}

console.log(solution(input));

// module.exports = solution;