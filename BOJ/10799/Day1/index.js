// const input = require('fs').readFileSync(0, 'utf-8').trim();

function isOpenBucket(target) {
  return target === '(';
}

function isCloseBucket(target) {
  return target === ')';
}

function isLaser(target) {
  return target === ' ';
}

const laserRegex = /\(\)/gi;

function solution(input) {
  const inputArr = input.replace(laserRegex, ' ').split('');

  let sum = 0;
  let stack = 0;

  inputArr.forEach((bucket) => {
    if (isOpenBucket(bucket)) {
      stack += 1;
    } else if (isCloseBucket(bucket)) {
      sum += 1;
      stack -= 1;
    } else if (isLaser(bucket)) {
      sum += stack;
    }
  });

  return sum;
}

// console.log(solution(input));

module.exports = solution;
