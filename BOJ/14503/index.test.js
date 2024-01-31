const solution = require('./Day1');

describe('로봇 청소기', () => {
  it('예제 입력 1', () => {
    const inputs = `3 3
1 1 0
1 1 1
1 0 1
1 1 1`;

    const answer = 1;

    expect(solution(inputs)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const inputs = `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`;

    const answer = 57;

    expect(solution(inputs)).toEqual(answer);
  });
});
