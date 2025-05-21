// const input = require('fs').readFileSync(0, 'utf-8').trim();

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.init();
  }

  init = () => {
    this.head = new Node(null);
    this.tail = new Node(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.cursor = this.tail;
  };

  insert = (value) => {
    const newNode = new Node(value);

    newNode.prev = this.cursor.prev;
    newNode.next = this.cursor;

    this.cursor.prev.next = newNode;
    this.cursor.prev = newNode;
  };

  delete = () => {
    if (this.cursor.prev === this.head) return;

    this.cursor.prev = this.cursor.prev.prev;
    this.cursor.prev.next = this.cursor;
  };

  goPrev() {
    if (this.cursor.prev !== this.head) {
      this.cursor = this.cursor.prev;
    }
  }

  goNext() {
    if (this.cursor !== this.tail) {
      this.cursor = this.cursor.next;
    }
  }

  getList = () => {
    const result = [];

    let currentNode = this.head.next;

    while (currentNode !== this.tail) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  };
}

const commandAction = (command, cursors) => {
  switch (command) {
    case 'L':
      cursors.goPrev();
      break;
    case 'D':
      cursors.goNext();
      break;
    case 'B':
      cursors.delete();
      break;
    default:
      const [_, s] = command.split(' ');
      cursors.insert(s);
      break;
  }
};

function solution(input) {
  const lines = input.split('\n');
  const strList = lines[0].split('');

  const commands = lines.slice(2);

  const doubleLinkedList = new DoubleLinkedList();

  for (const str of strList) {
    doubleLinkedList.insert(str);
  }

  for (const command of commands) {
    commandAction(command, doubleLinkedList);
  }

  return doubleLinkedList.getList().join('');
}

// console.log(solution(input));

module.exports = solution;
