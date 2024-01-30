const solution = require('./Day1');

describe('삼각형 외우기', () => {
  it('예제 입력 1', () => {
    const input = `60
70
50`;

    const answer = 'Scalene';

    expect(solution(input)).toEqual(answer);
  });
});
