export class Observer {
  subscribers = [];

  constructor() {
    this.subscribe = this.subscribe.bind(this);
    this.update = this.update.bind(this);
  }

  subscribe(newSubscriber) {
    this.subscribers.push(newSubscriber);
  }

  update() {
    this.subscribers.forEach((subscriber) => {
      subscriber.render();
    });
  }
}

export class Subscriber {
  render() {}
}
