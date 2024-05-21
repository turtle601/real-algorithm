const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function quad(y, x, N, graph) {
  if (N === 1) {
    return graph[y][x];
  }

  const r1 = quad(y, x, N / 2, graph);
  const r2 = quad(y, x + N / 2, N / 2, graph);
  const r3 = quad(y + N / 2, x, N / 2, graph);
  const r4 = quad(y + N / 2, x + N / 2, N / 2, graph);

  if (r1.length === 1 && r1 === r2 && r1 === r3 && r1 === r4) {
    return r1;
  }

  return `${r1}${r2}${r3}${r4}`;
}

const isZero = (v) => v === '0'; 

const isOne = (v) => v === '1'; 

function solution(inputs) {
  const inputList = inputs.split('\n')
  const N = inputList[0];
  const graph = inputList.slice(1).map(value => value.split(' '))
  const result = quad(0, 0, N, graph).split('');
  
  return [result.filter(isZero).length, result.filter(isOne).length].join('\n')
}

console.log(solution(inputs));

// module.exports = solution;