const inputs = require('fs').readFileSync(0, 'utf-8').trim();

function isEquilateralTriangle(angle1, angle2, angle3) {
  return angle1 === 60 && angle2 === 60 && angle3 === 60;
}

function isTriangle(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3 === 180;
}

function isIsoscelesTriangle(angle1, angle2, angle3) {
  return angle1 === angle2 || angle2 === angle3 || angle1 === angle3;
}

function solution(inputs) {
  const [angle1, angle2, angle3] = inputs.split('\n').map(Number);

  if (!isTriangle(angle1, angle2, angle3)) {
    return 'Error';
  } else {
    if (isEquilateralTriangle(angle1, angle2, angle3)) {
      return 'Equilateral';
    } else if (isIsoscelesTriangle(angle1, angle2, angle3)) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }
}

console.log(solution(inputs));

// module.exports = solution;
