import BasePage from "./BasePage";

const basePage = new BasePage();

// INPUTS
const nomeInput = "#dashboard-buscar-nome";
const nomeEditInput = "#editar-usuario-nome";
const emailInput = "#dashboard-buscar-email";
const emailEditInput = "#editar-usuario-email";
const senhaEditInput = "#editar-usuario-senha";
const senhaConfirmacaoEditInput = "#editar-usuario-confirmar-senha";
const nomeNovoUsuarioInput = "#novo-usuario-nome";
const emailNovoUsuarioInput = "#novo-usuario-email";
const senhaNovoUsuarioInput = "#novo-usuario-senha";
const confirmacaoSenhaNovoUsuarioInput = "#novo-usuario-confirmar-senha";

// SELECT
const cargoSelect = "#dashboard-buscar-cargo";

// BUTTONS
const dashboardBtn =
  ".css-1o5pq7n > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiBox-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root";
const candidatosBtn =
  ".css-1o5pq7n > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiBox-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root";
const buscarBtn = "#dashboard-buscar-buscar";
const novoUsuarioBtn = ".css-1ok18ze > .MuiBox-root > .MuiButton-root";
const voltarBtn = "#drawerContainer-voltar";
const cadastrarBtn = "#novo-usuario-cadastrar";
const sairBtn =
  ".css-1o5pq7n > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiBox-root > .MuiButton-text";
const confirmarEditBtn = "#editar-usuario-editar";
const excluirEditBtn = "#editar-usuario-exccluir";

// RADIOS
const colaboradorRadio = ".css-1t62lt9 > :nth-child(1)";
const administradorRadio = ".css-1t62lt9 > :nth-child(2)";
const administradorEditRadio = "#editar-usuario-colaborador";
const colaboradorEditRadio = "#editar-usuario-administrador";

// ERRORS TEXTS
const nomeNovoErrorTxt = "#novo-usuario > :nth-child(1) > .MuiTypography-root";
const nomeEditErrorTxt =
  "#editar-usuario > :nth-child(1) > .MuiTypography-root";
const emailNovoErrorTxt = ":nth-child(2) > .MuiTypography-root";
const emailEditErrorTxt = ":nth-child(2) > .MuiTypography-root";
const senhaNovoErrorTxt = ":nth-child(3) > .MuiTypography-root";
const senhaEditErrorTxt = ":nth-child(3) > .MuiTypography-root";
const confirmacaoSenhaErrorTxt = ":nth-child(4) > .MuiTypography-root";
const confirmacaoSenhaEditErrorTxt = ":nth-child(4) > .MuiTypography-root";

export default class Dashboardpage {
  fillFieldNome(text) {
    basePage.fillInput(nomeInput, text);
  }

  fillFieldEmail(text) {
    basePage.fillInput(emailInput, text);
  }

  selectAdministrador() {
    basePage.select(cargoSelect, "Administrador");
  }

  clickBtnSair() {
    basePage.click(sairBtn);
  }

  clickBtnNovoUsuario() {
    basePage.click(novoUsuarioBtn);
  }

  clickBtnCandidatos() {
    basePage.click(candidatosBtn);
  }

  clickBtnBuscar() {
    basePage.click(buscarBtn);
  }

  clickBtnDashboard() {
    basePage.click(dashboardBtn);
  }

  clickBtnCadastrar() {
    basePage.click(cadastrarBtn);
  }

  clickRadioColaborador() {
    basePage.click(colaboradorRadio);
  }

  clickRadioAdministrador() {
    basePage.click(administradorRadio);
  }

  fillFieldNomeNovoUsuario(text) {
    basePage.fillInput(nomeNovoUsuarioInput, text);
  }

  fillFieldEmailNovoUsuario(text) {
    basePage.fillInput(emailNovoUsuarioInput, text);
  }

  fillFieldSenhaNovoUsuario(text) {
    basePage.fillInput(senhaNovoUsuarioInput, text);
  }

  fillFieldConfirmaSenhaNovoUsuario(text) {
    basePage.fillInput(confirmacaoSenhaNovoUsuarioInput, text);
  }

  validateErrorNomeNovoUsuario(text) {
    basePage.validateText(nomeNovoErrorTxt, "O nome é obrigatório");
  }
  validateErrorEmailNovoUsuario(text) {
    basePage.validateText(
      emailNovoErrorTxt,
      "Só é válido o email com @dbccompany.com.br"
    );
  }
  validateErrorSenhaNovoUsuario(text) {
    basePage.validateText(
      senhaNovoErrorTxt,
      "A senha deve ter no mínimo 8 caracteres"
    );
  }
  validateErrorSenhaConfirmacaoNovoUsuario(text) {
    basePage.validateText(
      confirmacaoSenhaErrorTxt,
      "A confirmação de senha é obrigatória"
    );
  }

  validateErrorSenhasDiferentes(text) {
    basePage.validateText(
      confirmacaoSenhaErrorTxt,
      "As senhas devem ser iguais"
    );
  }
}
