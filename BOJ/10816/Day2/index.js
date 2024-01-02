function binarySearchForLower(arr, targetNum) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= targetNum) end = mid;
    else start = mid + 1;
  }

  return end;
}

function binarySearchForUpper(arr, targetNum) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > targetNum) end = mid;
    else start = mid + 1;
  }

  return end;
}

function solution(inputs) {
  const [[N], cardNumList, [M], targetNumList] = inputs
    .split('\n')
    .map((input) =>
      input
        .trim()
        .split(' ')
        .map((value) => Number(value))
    );

  cardNumList.sort((x, y) => x - y);

  return targetNumList
    .map((targetNum) => {
      const rightIdx = binarySearchForUpper(cardNumList, targetNum);
      const leftIdx = binarySearchForLower(cardNumList, targetNum);

      return rightIdx - leftIdx;
    })
    .join(' ');
}

module.exports = solution;
