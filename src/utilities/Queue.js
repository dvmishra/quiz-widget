class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  front;
  rear;
  size;

  constructor(size) {
    this.rear = null;
    this.front = null;
    this.size = size;
  }

  isFull() {
    let count = 0;
    let head = this.front;
    while (head !== null) {
      count += 1;
      if (count === this.size) return true;
      head = head.next;
    }
    return false;
  }

  enqueue(item) {
    const node = new Node(item);
    if (this.rear === null) {
      this.rear = node;
      this.front = node;
      return true;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.front === null) {
      return;
    }
    const node = this.front;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    return node;
  }

  clear() {
    this.front = null;
    this.rear = null;
  }
}
