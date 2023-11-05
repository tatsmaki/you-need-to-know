class Girlfriend {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Rostislav {
  myGirlfriend: Girlfriend;

  constructor() {
    let alena = new Girlfriend("Alena");
    this.myGirlfriend = alena;
  }
}

let rostislav = new Rostislav();

// Rostislav -> Girlfriend
