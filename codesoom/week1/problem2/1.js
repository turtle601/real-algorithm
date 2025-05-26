function solution(n) {
  const result = [0, 1];

  if (n <= 0) return 0;

  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
}

module.exports = solution;
