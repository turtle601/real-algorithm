const solution = require('./Day2');

describe('뒤집기 문제', () => {
  it('예제 입력 1', () => {
    const input = '0001100';

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = '11111';

    const answer = 0;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 3', () => {
    const input = '00000001';

    const answer = 1;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 4', () => {
    const input = '11001100110011000001';

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 5', () => {
    const input = '11101101';

    const answer = 2;

    expect(solution(input)).toEqual(answer);
  });
});
