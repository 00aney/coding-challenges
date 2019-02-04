function createQueue() {
  const queue =[];
  
  return {
    enqueue(x) {
      queue.unshift(x);
    },
    dequeue() {
      if (queue.length === 0) {
        return undefiend;
      }
      return queue.pop();
    },
    peek() {
      if (queue.length === 0) {
        return undefined;
      }
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

//const q = createQueue();

//q.enqueue('Make');
//q.enqueue('Cookie');
//q.enqueue('Study');

//q.dequeue();
//q.dequeue();
//console.log(q.peek());

exports.createQueue = createQueue;
