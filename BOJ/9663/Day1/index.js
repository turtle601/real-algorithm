const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
  const N = Number(input);
  const visited = Array(N).fill(0);
  let count = 0;

  function check(depth) {
    for (let i = 0; i < depth; i++) {
      if (visited[depth] === visited[i] || Math.abs(visited[depth] - visited[i]) === depth - i) {
        return false;
      }
    }

    return true;
  }

  function dfs(depth) {
    if (depth === N) {
      count += 1;
    } else {
      for (let i = 0; i < N; i++) {
        visited[depth] = i;
        if (check(depth)) dfs(depth + 1);
        visited[depth] = 0;
      }
    }
  }

  dfs(0);

  return count;
}

console.log(solution(input));

// module.exports = solution;