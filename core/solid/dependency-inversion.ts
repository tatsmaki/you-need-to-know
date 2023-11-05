interface IGirlfriend {
  name: string;
}

interface IRostislav {
  myGirlfriend: IGirlfriend;
}

class Girlfriend implements IGirlfriend {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let alena = new Girlfriend("Alena");

// Girlfriend -> IGirlfriend

class Rostislav implements IRostislav {
  myGirlfriend: IGirlfriend;

  constructor(girlfriend: IGirlfriend) {
    this.myGirlfriend = girlfriend;
  }
}

let rostislav = new Rostislav(alena);

// Rostislav -> IRostislav -> IGirlfriend <- Girlfriend
