const input = require('fs').readFileSync(0, 'utf-8').trim();

function isEquilateral(degree1, degree2, degree3) {
  return degree1 === 60 && degree2 ===  60 && degree3 === 60;
}

function isIsosceles(degree1, degree2, degree3) {
  return degree1 === degree2 || degree1 === degree3 || degree2 === degree3;
}

function isScalene(degree1, degree2, degree3) {
  return degree1 !== degree2 && degree1 !== degree3 && degree2 !== degree3;
}

function isError(degree1, degree2, degree3) {
  const sum = degree1 + degree2 + degree3;

  return sum !== 180;
}

function solution(input) {
  const inputList = input.split('\n').map(Number);

  if (isError(...inputList)) {
    return 'Error';
  } else if (isEquilateral(...inputList)) {
    return 'Equilateral';
  } else if (isIsosceles(...inputList)) {
    return 'Isosceles'
  } else if (isScalene(...inputList)) {
    return 'Scalene'
  }
}

console.log(solution(input));

// module.exports = solution;