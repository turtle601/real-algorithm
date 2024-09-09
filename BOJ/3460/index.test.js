const solution = require('./Day1');

describe('이진수', () => {
  it('예제 입력 1', () => {
    const input = `1
13`;

    const answer = `0 2 3`;

    expect(solution(input)).toEqual(answer);
  });
});
