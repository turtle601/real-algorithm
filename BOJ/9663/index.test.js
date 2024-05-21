const solution = require('./Day2');

describe('N-Queen', () => {
  it('예제 입력 1', () => {
    const input = `8`;

    const answer = 92;

    expect(solution(input)).toEqual(answer);
  });
});
