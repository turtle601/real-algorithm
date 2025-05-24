function solution(numbers) {
  if (numbers.length === 0) return 0;

  return numbers[0] + solution(numbers.slice(1));
}

module.exports = solution;
