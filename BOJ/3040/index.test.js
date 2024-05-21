const solution = require('./Day2');

describe('백설 공주와 일곱 난쟁이', () => {
  it('예제 입력 1', () => {
    const input = `7
8
10
13
15
19
20
23
25`;

    const answer = `7
8
10
13
19
20
23`;

    expect(solution(input)).toEqual(answer);
  });

  it('예제 입력 2', () => {
    const input = `8
6
5
1
37
30
28
22
36`;

    const answer = `8
6
5
1
30
28
22`;

    expect(solution(input)).toEqual(answer);
  });
});
