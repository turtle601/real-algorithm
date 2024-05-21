const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const N = Number(input);
  const visited = Array(N).fill(-1);
  let count = 0;

  const check = (depth) => {
    for (let i = 0; i < depth; i++) {
      if (visited[i] === visited[depth] || Math.abs(visited[depth] - visited[i]) === depth - i) {
        return false;
      }
    }
  
    return true;
  }

  const dfs = (depth) => {
    if (depth === N) {
      count += 1;
      return;
    } 
    
    for (let row = 0; row < N; row++) {
      visited[depth] = row;
      if (check(depth)) dfs(depth + 1);
      visited[depth] = -1;      
    }  
    
  }

  dfs(0);

  return count;
}

console.log(solution(input));

// module.exports = solution;