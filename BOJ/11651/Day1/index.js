const inputs = require('fs').readFileSync(0, 'utf-8').trim();
function solution(inputs) {
	return inputs.split('\n').map(inputList => inputList.split(' ').map(Number)).slice(1).sort((y,x) => {
		return y[1] - x[1] || y[0] - x[0] ;
	}).map(list => list.join(' ')).join('\n');
}

console.log(solution(inputs));

// module.exports = solution;