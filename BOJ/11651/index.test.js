const solution = require('./Day1');

describe('좌표 정렬하기 2', () => {
  it('예제 입력 1', () => {
    const inputs = `5
0 4
1 2
1 -1
2 2
3 3`;

    const answer = `1 -1
1 2
2 2
3 3
0 4`;

    expect(solution(inputs)).toEqual(answer)});


});
