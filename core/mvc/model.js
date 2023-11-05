import { Observer } from "./observer.js";

export class LoginModel extends Observer {
  constructor() {
    super();
    this.firstName = "";
    this.lastName = "";
    this.password = "";
    this.setPassword = this.setPassword.bind(this);
  }

  setPassword(password) {
    this.password = password;
    this.update();
  }
}
