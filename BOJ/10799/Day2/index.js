const input = require('fs').readFileSync(0, 'utf-8').trim();


function solution(input) {
  const inputList = input.replace(/\(\)/g, '0').split('');
  const stack = [];
  let count = 0;

  for (const backet of inputList) {
    if (backet === '0') {
      count += stack.length;
    } else if (stack.length > 0 && stack[stack.length - 1] === "(" && backet === ")") {
      stack.pop();   
    } else {
      count += 1;
      stack.push(backet);
    }
  }

  return count;
}

console.log(solution(input));

// module.exports = solution;
