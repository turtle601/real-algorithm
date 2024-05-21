const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const inputList = input.split('\n');
  
  const N = Number(inputList[0]);
  const backetList = inputList.slice(1).map((backet) => backet.trim().split(''));
  const result = [];

  for (const backets of backetList) {
    const stack = [];

    for (const backet of backets) {
      if (stack.length > 0 && backet === ")" && stack[stack.length -1] === "(") {
        stack.pop();
      } else {
        stack.push(backet);
      }
    }

    result.push(stack.length === 0 ? 'YES' : "NO");
  }
  
  return result.join('\n');
};

console.log(solution(input));

// module.exports = solution;
