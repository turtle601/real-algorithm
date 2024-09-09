const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const memory = [];
  const numberList = input.split(' ').map(Number);

  const p = numberList[0];
  const q = numberList[1];

  if (p < q) return 0;

  for (let i = 1; i <= p; i++) {
    if (p % i === 0) {
      memory.push(i);
    }
  }

  return String(memory[q - 1] || 0);
}

console.log(solution(input));

// module.exports = solution;
