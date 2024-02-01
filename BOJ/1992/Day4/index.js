const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function quad(y, x, n, graph) {
  if (n === 1) {
    return graph[y][x];
  }

  const r1 = quad(y, x, n / 2, graph);
  const r2 = quad(y, x + n / 2, n / 2, graph);
  const r3 = quad(y + n / 2, x, n / 2, graph);
  const r4 = quad(y + n / 2, x + n / 2, n / 2, graph);

  if (r1 === r2 && r1 === r3 && r1 === r4 && r1.length === 1) {
    return r1;
  }

  return `(${r1}${r2}${r3}${r4})`;
}

function solution(inputs) {
  const inputList = inputs.split('\n');
  const N = Number(inputList[0]);
  const graph = inputList.slice(1).map((input) => input.trim().split(''));

  return quad(0, 0, N, graph);
}

console.log(solution(inputs));

// module.exports = solution;
