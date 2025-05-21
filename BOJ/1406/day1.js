const input = require('fs').readFileSync(0, 'utf-8').trim();

class Cursors {
  constructor(str) {
    this.init(str);
  }

  init = (str) => {
    this.str = str;

    this.cursors = Array(str.length + 1).fill(false);
    this.cursors[this.cursors.length - 1] = true;

    this.cursorIndex = this.cursors.length - 1;

    console.log(this.cursors, 'this.cursors');
    console.log(this.cursorIndex, 'this.cursorIndex');
    console.log(this.str, 'this.str');
    console.log('------------------');
  };

  moveCursorLeft = () => {
    this.cursors[this.cursorIndex] = false;

    this.cursorIndex = this.cursorIndex > 0 ? this.cursorIndex - 1 : 0;

    this.cursors[this.cursorIndex] = true;
  };

  moveCursorRight = () => {
    this.cursors[this.cursorIndex] = false;

    this.cursorIndex =
      this.cursorIndex < this.cursors.length - 1
        ? this.cursorIndex + 1
        : this.cursors.length - 1;

    this.cursors[this.cursorIndex] = true;
  };

  delete = () => {
    if (this.cursorIndex === 0) {
      return;
    }

    this.cursors.splice(this.cursorIndex, 1);

    this.moveCursorLeft();

    this.str.splice(this.cursorIndex, 1);
  };

  add = (s) => {
    this.cursors.splice(this.cursorIndex, 0, false);
    this.str.splice(this.cursorIndex, 0, s);

    this.moveCursorRight();
  };
}

const commandAction = (command, cursors) => {
  switch (command) {
    case 'L':
      cursors.moveCursorLeft();
      break;
    case 'D':
      cursors.moveCursorRight();
      break;
    case 'B':
      cursors.delete();
      break;
    default:
      const [_, s] = command.split(' ');
      cursors.add(s);
      break;
  }
};

function solution(input) {
  const lines = input.split('\n');
  const str = lines[0].split('');

  const cursors = new Cursors(str);
  const commands = lines.slice(2);

  for (const command of commands) {
    commandAction(command, cursors);
  }

  return cursors.str.join('');
}

module.exports = solution;
