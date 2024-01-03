const solution = require('./Day1');

describe('쇠막대기 문제', () => {
  it('예제 입력 1', () => {
    const input = `()(((()())(())()))(())`;

    const answer = 17;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = `(((()(()()))(())()))(()())`;

    const answer = 24;

    expect(solution(input)).toEqual(answer);
  });
});
