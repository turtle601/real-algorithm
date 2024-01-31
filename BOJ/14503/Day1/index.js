// const inputs = require('fs').readFileSync(0, 'utf-8').trim();

const dy = [-1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
const dx = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1];

const by = [1, 0, -1, 0];
const bx = [0, -1, 0, 1];

function bfs(queue, N, M, graph) {
  while (queue.length > 0) {
    const [r, c, d] = queue.shift();

    let isAllClean = true;

    for (let i = 0; i < 4; i++) {
      const ny = r + dy[i];
      const nx = c + dx[i];

      if (nx >= 0 && ny >= 0 && ny < N && nx < M && graph[ny][nx] === 0) {
        isAllClean = false;
        break;
      }
    }

    if (isAllClean) {
      const backY = r + by[d];
      const backX = c + bx[d];
      if (
        backX >= 0 &&
        backY >= 0 &&
        backY < N &&
        backX < M &&
        graph[backY][backX] !== 1
      ) {
        queue.push([backY, backX, d]);
      }
    } else {
      for (let i = d + 7; i > d + 3; i--) {
        const nr = r + dy[i];
        const nc = c + dx[i];

        const direction = i % 4;

        if (nc >= 0 && nr >= 0 && nr < N && nc < M && graph[nr][nc] === 0) {
          graph[nr][nc] = 'X';
          queue.push([nr, nc, direction]);
          break;
        }
      }
    }
  }

  return graph;
}

function solution(inputs) {
  const inputList = inputs
    .split('\n')
    .map((input) => input.split(' ').map(Number));

  const [N, M] = inputList[0];
  const [r, c, d] = inputList[1];

  const graph = inputList.slice(2, inputList.length);

  graph[r][c] = 'X';

  const queue = [[r, c, d]];

  return bfs(queue, N, M, graph)
    .flat()
    .filter((item) => item === 'X').length;
}

// console.log(solution(inputs));

module.exports = solution;
