const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const [info, ...data] = input.split('\n').map((item) => item.trim());

  const N = +info;
  const arr = [0, ...data[0].split(' ').map((item) => +item), 0, 0];
  const dp = Array.from({ length: N + 2 }, () => 0);

  for (let i = 1; i <= N + 2; i++) {
    dp[i] = dp[i - 1] + arr[i];

    if (i >= 3) {
      dp[i] = Math.max(
        dp[i],
        dp[i - 3] + (arr[i] + arr[i - 1] + arr[i - 2]) * 2
      );
    }
  }

  answer = dp[N + 2];

  return answer;
}

console.log(solution(input));

// module.exports = solution;
