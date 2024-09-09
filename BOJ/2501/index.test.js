const solution = require('./Day1');

describe('약수 구하기', () => {
  it('예제 입력 1', () => {
    const input = `6 3`;

    const answer = `3`;

    expect(solution(input)).toEqual(answer);
  });
  it('예제 입력 1', () => {
    const input = `25 4`;

    const answer = `0`;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 1', () => {
    const input = `2735 1`;

    const answer = `1`;

    expect(solution(input)).toEqual(answer);
  });
});
