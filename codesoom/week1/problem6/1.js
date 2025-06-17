// 시간복잡도 3 ^ n

function countWay(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;

  return countWay(n - 1) + countWay(n - 2) + countWay(n - 3);
}

function solution(n) {
  return countWay(n);
}

module.exports = solution;
