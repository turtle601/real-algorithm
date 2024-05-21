const solution = require('./Day1');

describe('N과 M(1)', () => {
  it('예제 입력 1', () => {
    const inputs = `3 1`;

    const answer = `1
2
3`;

    expect(solution(inputs)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const inputs = `4 2`;

    const answer = `1 2
1 3
1 4
2 3
2 4
3 4`;

    expect(solution(inputs)).toEqual(answer);
  });

  it('예제 입력 3', () => {
    const inputs = `4 4`;

    const answer = `1 2 3 4`;

    expect(solution(inputs)).toEqual(answer);
  });
});
