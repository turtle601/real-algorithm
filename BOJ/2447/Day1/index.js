const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  let result = '';

  const drawStar = (y, x, starsLen) => {
    if (y % 3 === 1 && x % 3 === 1) {
      result += ' ';
    } else {
      if (starsLen < 3) {
        result += '*';
      } else {
        drawStar(
          Math.floor(y / 3),
          Math.floor(x / 3),
          Math.floor(starsLen / 3)
        );
      }
    }
  };

  for (i = 0; i < input; i++) {
    for (j = 0; j < input; j++) {
      drawStar(i, j, input);
    }

    result += '\n';
  }

  return result.slice(0, result.length - 1);
}

console.log(solution(input));

// module.exports = solution;
