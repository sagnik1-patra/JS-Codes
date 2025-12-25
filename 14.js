class TaskQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(task) {
    this.queue.push(task);
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;

    while (this.queue.length) {
      await this.queue.shift()();
    }

    this.running = false;
  }
}
