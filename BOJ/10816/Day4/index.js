const input = require('fs').readFileSync(0, 'utf-8').trim();

function binaryLowerSearch(numbers, target, start = 0, end = numbers.length) {
  let mid = Math.floor((start + end) / 2);

  if (start >= end) {
    return end;
  }

  if (numbers[mid] >= target)
    return binaryLowerSearch(numbers, target, start, mid);
  else return binaryLowerSearch(numbers, target, mid + 1, end);
}

function binaryUpperSearch(numbers, target, start = 0, end = numbers.length) {
  let mid = Math.floor((start + end) / 2);

  if (start >= end) {
    return end;
  }

  if (numbers[mid] > target)
    return binaryUpperSearch(numbers, target, start, mid);
  else return binaryUpperSearch(numbers, target, mid + 1, end);
}

function solution(input) {
  const [[N], cardNumbers, [M], targetNumbers] = input
    .split('\n')
    .map((item) => item.trim().split(' ').map(Number));

  cardNumbers.sort((x, y) => x - y);

  return targetNumbers
    .map((targetNumber) => {
      const rightIdx = binaryUpperSearch(cardNumbers, targetNumber);
      const leftIdx = binaryLowerSearch(cardNumbers, targetNumber);

      return rightIdx - leftIdx;
    })
    .join(' ');
}

console.log(solution(input));

// module.exports = solution;
