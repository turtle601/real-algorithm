const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
	const inputList = input.split('\n');
	const [N, D] = inputList[0].split(' ').map(Number);	
  const road = inputList.slice(1).map(v => v.split(' ').map(Number))
  const dp = [0]; 

  for (let i = 1; i <= D; i++) {
    dp.push(dp[i - 1] + 1);

    for (const [start, end, edge] of road) {
      if (i === end) {
        dp[i] = Math.min(dp[start] + edge, dp[i]);

      }
    } 
  }

  return dp[D]
}

console.log(solution(input));

// module.exports = solution;