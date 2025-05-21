const solution = require('./day2');

describe('뒤집기 문제', () => {
  it('예제 입력 1', () => {
    const input = `abcd
3
P x
L
P y`;

    const answer = 'abcdyx';

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = `abc
9
L
L
L
L
L
P x
L
B
P y`;

    const answer = 'yxabc';

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 3', () => {
    const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;

    const answer = 'yxz';

    expect(solution(input)).toEqual(answer);
  });
});
