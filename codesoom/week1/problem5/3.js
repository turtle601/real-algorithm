function euclidAlgorithm(x, y, acc) {
  if (acc === 0) return y;

  return euclidAlgorithm(y, acc, y % acc);
}

function solution(a, b) {
  const [x, y] = [a, b].sort((x, y) => y - x);

  return euclidAlgorithm(x, y, x % y);
}

module.exports = solution;
