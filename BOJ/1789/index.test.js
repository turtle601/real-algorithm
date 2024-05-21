const solution = require('./Day2');

describe('수들의 합', () => {
	it('예제 입력 1', () => {
		const input = `200`;
		
		const answer = 19;
		
		expect(solution(input)).toEqual(answer);
	});
});
