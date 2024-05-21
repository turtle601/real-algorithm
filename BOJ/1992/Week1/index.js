const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function solution(inputs) {
  const inputList = inputs.split('\n');
  const N = Number(inputList[0]);
  const graph = inputList.slice(1).map(v => v.split(''));

  const quad = (y, x, n) => {
    if (n === 1) {
      return graph[y][x];
    }

    const r1 = quad(y, x, n / 2);
    const r2 = quad(y, x + n / 2, n / 2);
    const r3 = quad(y + n / 2, x, n / 2);
    const r4 = quad(y + n / 2, x + n / 2, n / 2);

    if (r1.length === 1 && r1 === r2 && r1 === r3 && r1 === r4) {
      return r1;
    }

    return `(${r1}${r2}${r3}${r4})`
  }

  return quad(0, 0, N);
}


console.log(solution(inputs));

// module.exports = solution;
