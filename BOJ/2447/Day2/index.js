/**/
const input = require('fs').readFileSync(0, 'utf-8').trim();

const dy = [0,0,1,1,2,2,2];
const dx = [1,2,0,2,0,1,2];

function getCenterLocation(depth) {
  if (depth === 3) return [[1,1]];
  
  const result = [];
  
  for (let i = depth / 3; i < depth * 2 / 3; i++) {
    for (let j = depth / 3; j < depth * 2 / 3; j++) {
      result.push([i,j])
    }
  }

  return result;
}

function getEmptyLocation(depth) {
  if (depth === 3) {
    return getCenterLocation(depth);
  }

  const result = [];

  const emptyList = getEmptyLocation(depth / 3);

  for (const [y,x] of emptyList) {
    for (let i = 0; i < 7; i++) {
      result.push([y + dy[i] * depth / 3 , x + dx[i] * depth / 3])
    }
  }

  return [...emptyList, ...result, ...getCenterLocation(depth)];
}

function check(y, x, emptyList) {
  for (const [i,j] of emptyList) {
    if (i === y && x === j) {
      return true;
    }
  }
  
  return false;
}

function draw (emptyList, depth) {
  let result = ''

  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < depth; j++) {
      if (check(i,j, emptyList)) {
        result += ' ';
      } else {
        result += '*';
      }
    }

    result += '\n';
  }

  return result;
}

function solution(input) {
  const N = Number(input);

  const emptyList = getEmptyLocation(N);

  const result = draw(emptyList, N);

  return result;
}

console.log(solution(input));

// module.exports = solution;
