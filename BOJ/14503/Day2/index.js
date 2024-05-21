// const input = require('fs').readFileSync(0, 'utf-8').trim();

const dy = [-1,0,1,0,-1,0,1,0,-1,0,1,0];
const dx = [0,1,0,-1,0,1,0,-1,0,1,0,-1];

function solution(input) {
  const inputList = input.split('\n');
  const [N, M] = inputList[0].split(' ').map(Number);
  const [locY, locX, direction] = inputList[1].split(' ').map(Number);
  const graph = inputList.slice(2).map(v => v.split(' ').map(Number));
  let count = 0;
  
  const bfs = (locY, locX, direction) => {
    let breakpoint = false;
    const queue = [[locY, locX, direction]];
    graph[locY][locX] = 'X';

    while (queue.length > 0 && !breakpoint) {
      const [y, x, dir] = queue.shift();

      for (let i = dir + 4; i > dir; i--) {
        /* 진행 좌표 */
        const ny = y + dy[i];
        const nx = x + dx[i];

        /* 경계선을 넘는지 */
        if (0 > ny || ny >= N || 0 > nx || nx >= M ) continue;

        if (graph[ny][nx] === 0) {
          graph[ny][nx] = 'X';
          queue.push([ny, nx, i % 4]);
          break;
        } 
      }

      // if (noZeroFlag) {
      //   const ry = y + dy[dir + 4 - 2];
      //   const rx = x + dx[dir + 4 - 2];
  
      //   if (graph[ry][rx] === 1) {
      //     breakpoint = true;
      //   } else {
      //     queue.push([ry, rx, dir]);
      //   }   
      // }
    }
  }

  bfs(locY, locX, direction);

  return count;
}

// console.log(solution(input));

module.exports = solution;