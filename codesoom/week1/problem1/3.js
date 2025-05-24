function solution(numbers, acc = 0) {
  if (numbers.length === 0) {
    return acc;
  }

  return solution(numbers.slice(1), acc + numbers[0]);
}

module.exports = solution;
