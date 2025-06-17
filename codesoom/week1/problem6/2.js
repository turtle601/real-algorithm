// 시간복잡도 O(n)

function countWay(n) {
  const memo = [1];

  for (let i = 1; i <= n; i++) {
    const first = memo[i - 1] ?? 0;
    const second = memo[i - 2] ?? 0;
    const third = memo[i - 3] ?? 0;

    memo.push(first + second + third);
  }

  return memo[n];
}

function solution(n) {
  return countWay(n);
}

module.exports = solution;
