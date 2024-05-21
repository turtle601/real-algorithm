const regexZero = /0/g;
const regexOne = /1/g;

function lumpsCount(regex, input) {
  return input.split(regex).filter((value) => value !== '').length;
}

function solution(input) {
  return Math.min(lumpsCount(regexOne, input), lumpsCount(regexZero, input));
}

module.exports = solution;
