const solution = require('.');

describe('숫자 카드 2 문제', () => {
  it('예제 입력 1', () => {
    const inputs = `10
    6 3 2 10 10 10 -10 -10 7 3
    8
    10 9 -5 2 3 4 5 -10`;

    const answer = '3 0 0 1 2 0 0 2';

    expect(solution(inputs)).toEqual(answer);
  });
});
