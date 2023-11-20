const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [[towerCount], towerArr] = input.split('\n').map((item) =>
    item
      .trim()
      .split(' ')
      .map((value) => Number(value))
  );

  if (towerCount <= 2) {
    return Math.max(...towerArr);
  } else {
    const res = Array(towerCount - 2)
      .fill(0)
      .map((_, idx) => {
        return towerArr[idx + 1] + Math.min(towerArr[idx], towerArr[idx + 2]);
      });

    return Math.max(...res, towerArr[0], towerArr[towerCount - 1]);
  }
}

console.log(solution(input));

// module.exports = solution;
