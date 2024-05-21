const solution = require('./Day2');

describe('괄호 문제', () => {
  it('예제 입력 1', () => {
    const input = `6
    (())())
    (((()())()
    (()())((()))
    ((()()(()))(((())))()
    ()()()()(()()())()
    (()((())()(`;

    const answer = `NO\nNO\nYES\nNO\nYES\nNO`;

    expect(solution(input)).toEqual(answer);
  });
  it('예제 입력 2', () => {
    const input = `3
    ((
    ))
    ())(()`;
    const answer = `NO\nNO\nNO`;

    expect(solution(input)).toEqual(answer);
  });
});
