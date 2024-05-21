const solution = require('./Day1');

describe('숫자 카드 2 문제', () => {
  it('예제 입력 1', () => {
    const inputs = `3
7
13 10 12 11 10 11 12
5
2 4 5 7 9
8
6 6 6 6 6 6 6 6`;

    const answer = `1
4
0`;

    expect(solution(inputs)).toEqual(answer);
  });
});
