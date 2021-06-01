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
  currentSize;

  constructor(size) {
    this.rear = null;
    this.front = null;
    this.size = size;
    this.currentSize = 0;
  }

  isFull() {
    if (this.currentSize >= this.size) {
      return true;
    }
    return false;
  }

  enqueue(item) {
    const node = new Node(item);
    this.currentSize += 1;
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

    this.currentSize -= 1;
    return node;
  }

  clear() {
    this.front = null;
    this.rear = null;
    this.currentSize = 0;
  }
}
