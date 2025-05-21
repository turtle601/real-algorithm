const solution = require('./day1');

describe('뒤집기 문제', () => {
  it('예제 입력 1', () => {
    const input = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`;

    const answer = `2
2
0
2
1
-1
0
1
-1
0
3`;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = `7
pop
top
push 123
top
pop
top
pop`;

    const answer = `-1
-1
123
123
-1
-1`;

    expect(solution(input)).toEqual(answer);
  });
});
