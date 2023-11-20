const solution = require('.');

describe('blobnom 문제', () => {
  it('예제 입력 1', () => {
    const input = `4
    1 3 2 2`;

    const answer = 4;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = `5
    2 4 3 5 5`;

    const answer = 8;
    expect(solution(input)).toEqual(answer);
  });

  it('반례 1: tower의 개수가 1일 경우', () => {
    const input = `1
    2`;

    const answer = 2;
    expect(solution(input)).toEqual(answer);
  });

  it('반례 2: tower의 개수가 2일 경우', () => {
    const input = `2
    2 4`;

    const answer = 4;
    expect(solution(input)).toEqual(answer);
  });

  it('반례 3: 타워의 수가 양 끝이 가장 높을 때', () => {
    const input = `2
    2 1 6 12`;

    const answer = 12;
    expect(solution(input)).toEqual(answer);
  });
});
