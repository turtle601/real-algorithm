const input = require('fs').readFileSync(0, 'utf-8').trim();

function isOpenBucket(target) {
  return target === '(';
}

function isCloseBucket(target) {
  return target === ')';
}

function isVPS(bucketList) {
  const stack = [];

  bucketList.forEach((bucket) => {
    if (
      stack.length > 0 &&
      isOpenBucket(stack[stack.length - 1]) &&
      isCloseBucket(bucket)
    ) {
      stack.pop();
    } else {
      stack.push(bucket);
    }
  });

  return stack.length === 0 ? 'YES' : 'NO';
}

function solution(input) {
  const inputList = input.split('\n');
  const N = inputList[0];
  const bucketLists = inputList.slice(1).map((input) => input.trim().split(''));

  return bucketLists
    .map((bucketList) => {
      return isVPS(bucketList);
    })
    .join('\n');
}

console.log(solution(input));

// module.exports = solution;
