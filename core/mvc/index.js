import { LoginController } from "./controller.js";
import { LoginModel } from "./model.js";
import { LoginView } from "./view.js";

const loginModel = new LoginModel();

const loginController = new LoginController(loginModel);

const loginView = new LoginView(loginModel, loginController);

loginModel.subscribe(loginView);

document.body.append(loginView.render());
