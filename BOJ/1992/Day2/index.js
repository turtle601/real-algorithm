const input = require('fs').readFileSync(0, 'utf-8').trim();

function divide(y, x, size, graph) {
  if (size === 1) {
    return graph[y][x];
  }

  const r1 = divide(y, x, size / 2, graph);
  const r2 = divide(y, x + size / 2, size / 2, graph);
  const r3 = divide(y + size / 2, x, size / 2, graph);
  const r4 = divide(y + size / 2, x + size / 2, size / 2, graph);

  if (r1 === r2 && r1 === r3 && r1 === r4 && r1.length === 1) {
    return r1;
  }

  return `(${r1}${r2}${r3}${r4})`;
}

function solution(input) {
  const inputList = input.split('\n');
  const N = inputList[0];
  const graph = inputList.slice(1).map((input) => input.trim().split(''));

  return divide(0, 0, N, graph);
}

console.log(solution(input));

// module.exports = solution;
