const solution = require('./Day1');

describe('N으로 표현', () => {
	it('예제 입력 1', () => {
		const N = 5;
    const number = 12;
    
		const answer = 4;
		
		expect(solution(N, number)).toEqual(answer);
	});

	it('예제 입력 3', () => {
		const N = 2;
    const number = 11;  
    
		const answer = 3;
		
		expect(solution(N, number)).toEqual(answer);
	});
});
