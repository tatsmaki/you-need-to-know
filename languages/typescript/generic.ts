interface IGirlfriend<T> {
  name: T;
}

class Girlfriend<T> implements IGirlfriend<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

let alena = new Girlfriend<string>("Alena");
