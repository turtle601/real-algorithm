const solution = require('./Day1');

describe('지름길', () => {
  it('예제 입력 1', () => {
    const input = `5 150
0 50 10
0 50 20
50 100 10
100 151 10
110 140 90`;

    const answer = 70;

    expect(solution(input)).toEqual(answer);
  });

  // 	it('예제 입력 2', () => {
  // 		const input = `2 100
  // 10 60 40
  // 50 90 20`;

  // 		const answer = 80;

  // 		expect(solution(input)).toEqual(answer);
  // 	});
  // 	it('예제 입력 3', () => {
  // 		const input = `8 900
  // 0 10 9
  // 20 60 45
  // 80 190 100
  // 50 70 15
  // 160 180 14
  // 140 160 14
  // 420 901 5
  // 450 900 0`;

  // 		const answer = 432;

  // 		expect(solution(input)).toEqual(answer);
  // 	});
});
