function euclidAlgorithm(x, y) {
  const rest = x % y;

  if (rest === 0) return y;

  return euclidAlgorithm(y, rest);
}

function solution(a, b) {
  const args = [a, b].sort((x, y) => y - x);
  return euclidAlgorithm(...args);
}

module.exports = solution;
