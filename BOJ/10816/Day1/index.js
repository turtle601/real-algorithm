function binarySearchForLower(list, target) {
  let start = 0;
  let end = list.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (list[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function binarySearchForUpper(list, target) {
  let start = 0;
  let end = list.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (list[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function solution(inputs) {
  const [[N], cardNumList, [M], targetNumList] = inputs
    .split('\n')
    .map((item) =>
      item
        .trim()
        .split(' ')
        .map((value) => Number(value))
    );

  cardNumList.sort((x, y) => x - y);

  return targetNumList
    .map((num) => {
      const rightIdx = binarySearchForUpper(cardNumList, num);
      const leftIdx = binarySearchForLower(cardNumList, num);

      return rightIdx - leftIdx;
    })
    .join(' ');
}

console.log(solution(inputs));

// module.exports = solution;
