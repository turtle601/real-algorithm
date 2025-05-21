// const input = require('fs').readFileSync(0, 'utf-8').trim();

class Stack {
  constructor() {
    this.init();
  }

  init = () => {
    this.arr = [];
  };

  // push X: 정수 X를 스택에 넣는 연산이다.
  push = (value) => {
    this.arr.push(value);
  };

  // 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop = () => {
    const value = this.arr.pop();

    return value ?? -1;
  };

  // 스택에 들어있는 정수의 개수를 출력한다.
  size = () => {
    return this.arr.length;
  };

  // 스택이 비어있으면 1, 아니면 0을 출력한다.
  empty = () => {
    return this.arr.length === 0 ? 1 : 0;
  };

  // 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
  top = () => {
    return this.arr[this.arr.length - 1] ?? -1;
  };
}

function solution(input) {
  const result = [];
  const line = input.split('\n');
  const N = Number(line[0]);

  const stack = new Stack();

  for (const command of line.slice(1)) {
    const [cmd, value] = command.split(' ');

    switch (cmd) {
      case 'push':
        stack.push(value);
        break;
      case 'pop':
        result.push(stack.pop());
        break;
      case 'size':
        result.push(stack.size());
        break;
      case 'empty':
        result.push(stack.empty());
        break;
      case 'top':
        result.push(stack.top());
        break;
    }
  }

  return result.join('\n');
}

// console.log(solution(input));

module.exports = solution;
