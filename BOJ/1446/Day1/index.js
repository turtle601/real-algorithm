// const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(inputs) {
  const inputList = inputs
    .split('\n')
    .map((value) => value.split(' ').map(Number));

  const [_, M] = inputList[0];

  const dp = [0];

  const dotList = inputList.slice(1).sort((x, y) => x[0] - y[0]);

  for (let i = 1; i <= M; i++) {
    dp.push(dp[i - 1] + 1);

    for (const [start, end, dist] of dotList) {
      if (i !== end || !dp[end]) continue;
      dp[end] = Math.min(dp[start] + dist, dp[end]);
    }
  }

  return dp[M];
}

// console.log(solution(input));

module.exports = solution;
