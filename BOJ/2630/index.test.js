const solution = require('./Day1');

describe('색종이 만들기', () => {
  it('예제 입력 1', () => {
    const input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`;

    const answer = `9
7`;

    expect(solution(input)).toEqual(answer);
  });
});
