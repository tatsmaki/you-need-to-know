class Girlfriend {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let alena = new Girlfriend("Alena");

class Rostislav {
  myGirlfriend: Girlfriend;

  constructor(girlfriend: Girlfriend) {
    this.myGirlfriend = girlfriend;
  }
}

let rostislav = new Rostislav(alena);

// Rostislav -> Girlfriend
