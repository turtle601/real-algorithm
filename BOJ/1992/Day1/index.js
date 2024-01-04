const input = require('fs').readFileSync(0, 'utf-8').trim();

let result = [];

function division(y, x, size, graph) {
  let isDiff = false;

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (graph[i][j] !== graph[y][x]) {
        isDiff = true;
        break;
      }
    }

    if (isDiff) break;
  }

  if (!isDiff) result.push(graph[y][x]);
  else {
    result.push('(');
    division(y, x, size / 2, graph);
    division(y, x + size / 2, size / 2, graph);
    division(y + size / 2, x, size / 2, graph);
    division(y + size / 2, x + size / 2, size / 2, graph);
    result.push(')');
  }
}

function solution(input) {
  result = [];
  const inputList = input.split('\n');
  const N = inputList[0];
  const graph = inputList
    .slice(1)
    .map((item) => item.trim().split('').map(Number));

  division(0, 0, N, graph);

  return result.join('');
}

console.log(solution(input));

// module.exports = solution;
