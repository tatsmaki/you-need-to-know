import { Subscriber } from "./observer.js";

export class LoginView extends Subscriber {
  constructor(loginModel, loginController) {
    super();
    this.loginModel = loginModel;
    this.loginController = loginController;
  }

  render() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.value = this.loginModel.password;

    input.oninput = this.loginController.onPasswordChange;

    form.append(input, `password: ${this.loginModel.password}`);

    document.body.replaceChildren(form);

    input.focus();
  }
}
