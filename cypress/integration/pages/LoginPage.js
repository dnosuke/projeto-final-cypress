import BasePage from "./BasePage";

const basePage = new BasePage();

const email = "#home-email";
const password = "#home-senha";
const btnLogin = "#home-entrar";
const btnRegister = "#register";
const loginErrorText = ".Toastify__toast-body > :nth-child(2)";
const dashboardText = ".MuiToolbar-root > .MuiTypography-root";
const inscricaoTitle = ".MuiBox-root > .MuiTypography-root";

export default class LoginPage {
  fillFieldEmail(text) {
    basePage.fillInput(email, text);
  }

  fillFieldPassword(text) {
    basePage.fillInput(password, text);
  }

  clickBtnFazerLogin() {
    basePage.click(btnLogin);
  }

  clickBtnRegistrar() {
    basePage.click(btnRegister);
  }

  validateLoginError() {
    basePage.validateText(loginErrorText, "Email ou senha inválidos");
  }

  validateRedirecionarParaDashboard() {
    basePage.validateText(dashboardText, "Dashboard");
  }

  validateRedirecionarParaInscricao() {
    basePage.validateText(inscricaoTitle, "Informações Cadastrais");
  }
}
