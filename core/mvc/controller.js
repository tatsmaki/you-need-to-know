export class LoginController {
  constructor(loginModel) {
    this.loginModel = loginModel;
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordChange(event) {
    this.loginModel.setPassword(event.target.value);
  }
}
