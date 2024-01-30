const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function makeCardDic(cardNum) {
  return cardNum.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});
}

function solution(inputs) {
  const [[N], cardNum, [M], targetNum] = inputs
    .split('\n')
    .map((input) => input.split(' ').map(Number));

  const dic = makeCardDic(cardNum);

  return targetNum.map((num) => (dic[num] ? dic[num] : 0)).join(' ');
}

console.log(solution(inputs));

// module.exports = solution;
