import { Queue } from './Queue';

export function generateRandomNumber() {
  const numberMap = {};
  const numberQueue = new Queue(10);

  while (true) {
    const limits = [10, 100, 1000];
    const limit = limits[Math.floor(Math.random() * limits.length)];
    let number = 0;
    switch (limit) {
      case 10:
        number = Math.round(Math.random() * 9);
        break;
      case 100:
        number = 10 + Math.round(Math.random() * 89);
        break;
      case 1000:
        number = 100 + Math.round(Math.random() * 899);
        break;
    }
    if (!number in numberMap) {
      numberMap[number] = 0;
      if (!numberQueue.isFull()) {
        numberQueue.enqueue(number);
      } else {
        const node = numberQueue.dequeue();
        delete numberMap[node.value];
        numberQueue.enqueue(number);
      }
      break;
    }
    return { number1: number, answer: limit };
  }
}
