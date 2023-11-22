const solution = require('.');

describe('스위치 문제', () => {
  it('예제 입력 1', () => {
    const input = `3
    -2 0 1`;

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });
  it('예제 입력 2', () => {
    const input = `4
    1 2 3 4`;

    const answer = 20;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 3', () => {
    const input = `5
    -1 -2 -3 -4 -5`;

    const answer = -15;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 4', () => {
    const input = `9
    -2 10 2 -7 9 1 -2 -3 4`;

    const answer = 34;

    expect(solution(input)).toEqual(answer);
  });
});
