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

  moveLeft() {
    if (this.cursor.prev !== this.head) {
      this.cursor = this.cursor.prev;
    }
  }

  moveRight() {
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

// 이중연결리스트의 경우 커서를 조정함으로써 연결리스트 추가, 삭제를 용이하게 하자!!
// 예제는 cursor를 tail로 두고 했지만 때에 따라서는 head로 두고 풀어도 괜찮을 것 같다.
