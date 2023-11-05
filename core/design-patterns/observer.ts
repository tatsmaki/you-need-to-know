interface IChat {
  subscribe(users: IUser[]): void;
  update(message: string): void;
}

interface IUser {
  name: string;
  notify(messages: string[]): void;
}

class Chat implements IChat {
  private messages: string[] = [];
  private users: IUser[] = [];

  constructor() {
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(users: IUser[]) {
    this.users.push(...users);
  }

  update(message: string) {
    this.messages.push(message);
    this.users.forEach((user) => user.notify(this.messages));
  }
}

class User implements IUser {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(messages: string[]) {
    console.log(this.name, messages);
  }
}

let currentChat = new Chat();
let masha = new User("Masha");
let vasya = new User("Vasya");

currentChat.subscribe([masha, vasya]);
currentChat.update("Привет");
