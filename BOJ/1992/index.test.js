const solution = require('./Day1');

describe('쿼드트리 문제', () => {
  it('예제 입력 1', () => {
    const input = `8
    11110000
    11110000
    00011100
    00011100
    11110000
    11110000
    11110011
    11110011
  `;

    const answer = '((110(0101))(0010)1(0001))';

    expect(solution(input)).toEqual(answer);
  });
});
