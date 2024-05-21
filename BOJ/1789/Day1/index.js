// const input = require('fs').readFileSync(0, 'utf-8').trim();

function solution(input) {
	const N = Number(input);
	let sum = 0;
	let count = 0;
	let i = 1;

	while (sum <= N) {
		sum += i;
		count += 1;
		i++;
	}

	return count - 1;
}

// console.log(solution(input));

// module.exports = solution;