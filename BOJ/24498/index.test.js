const { solution } = require('.');

describe('blobnom 문제', () => {
  test('예제 입력 1', () => {
    const input = `4
    1 3 2 2`;

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  test('예제 입력 2', () => {
    const input = `5
    2 4 3 5 5`;

    const answer = 8;
    expect(solution(input)).toEqual(answer);
  });
});
