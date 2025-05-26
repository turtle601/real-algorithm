function toBinaryRecursive(n) {
  if (n === 0) return '';
  return toBinaryRecursive(Math.floor(n / 2)) + (n % 2);
}

function toBinary(n) {
  if (n === 0) return '0'; // 예외 처리
  return toBinaryRecursive(n);
}

function solution(n) {
  return toBinary(n);
}

module.exports = solution;
