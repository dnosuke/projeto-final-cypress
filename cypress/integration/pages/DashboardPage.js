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
const pesquisaInscricoesInput = "#registros-pesquisar";

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
const excluirBtn = "#editar-usuario-exccluir";
const excluirEditBtn = "#editar-usuario-exccluir";
const confirmarExcluirBtn =
  "body > div.MuiDialog-root.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedError.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedError.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-16hxacb";
const naoExcluirBtn = "#editar-usuario-exccluir";
const buscarInscricoesBtn = ".css-1t62lt9 > .MuiButtonBase-root";
const inscricoesBtn =
  ".css-1o5pq7n > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiBox-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root";

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

// TEXT
const nomeGestorTxt = "#header-gestor-nome";
const cargoGestorTxt = "#header-gestor-cargo";
const buscaNomeTxt = "[data-field='nome'] > .MuiDataGrid-cellContent";
const buscaEmailTxt = "[data-field='email'] > .MuiDataGrid-cellContent";
const cadastroSucessTxt = ".Toastify__toast-body > :nth-child(2)";
const deletarUserSucessTxt = ".Toastify__toast-body > :nth-child(2)";
const resultadoBusca = ".MuiDataGrid-row > [data-field='nome']";
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

  clickBtnConfimarEdit() {
    basePage.click(confirmarEditBtn);
  }

  fillFieldNomeEdit(nome) {
    basePage.clearInput(nomeEditInput);
    basePage.fillInput(nomeEditInput, nome);
  }
  fillFieldEmailEdit(email) {
    basePage.clearInput(emailEditInput);
    basePage.fillInput(emailEditInput, email);
  }

  fillFieldNomeNovoUsuario(nome) {
    basePage.fillInput(nomeNovoUsuarioInput, nome);
  }

  fillFieldEmailNovoUsuario(email) {
    basePage.fillInput(emailNovoUsuarioInput, email);
  }

  fillFieldSenhaNovoUsuario(senha) {
    basePage.fillInput(senhaNovoUsuarioInput, senha);
  }

  fillFieldConfirmaSenhaNovoUsuario(senhaConfirmacao) {
    basePage.fillInput(confirmacaoSenhaNovoUsuarioInput, senhaConfirmacao);
  }

  fillFieldPesquisaInscricoes(text) {
    basePage.fillInput(pesquisaInscricoesInput, text);
  }

  clickBtnBuscarInscricao() {
    basePage.click(buscarInscricoesBtn);
  }

  validateBuscarGestorNome(nome) {
    basePage.time(2000);
    basePage.validateText(buscaNomeTxt, nome);
  }

  validateBusacarGestorEmail(email) {
    basePage.time(2000);
    basePage.validateText(buscaEmailTxt, email);
  }

  validateAdministradorLogado() {
    basePage.time(2000);
    basePage.validateText(cargoGestorTxt, "administrador");
  }

  validateCadastroComSucesso() {
    basePage.time(2000);
    basePage.validateText(cadastroSucessTxt, "Usuário cadastrado com sucesso");
  }

  validateColaboradorLogado() {
    basePage.validateText(cargoGestorTxt, "colaborador");
  }

  validateDeletarUserSucesso() {
    basePage.validateText(deletarUserSucessTxt, "Usuário deletado com sucesso");
  }
  validateErrorNomeNovoUsuario() {
    basePage.validateText(nomeNovoErrorTxt, "O nome é obrigatório");
  }
  validateErrorEmailNovoUsuario() {
    basePage.validateText(
      emailNovoErrorTxt,
      "Só é válido o email com @dbccompany.com.br"
    );
  }
  validateErrorSenhaNovoUsuario() {
    basePage.validateText(
      senhaNovoErrorTxt,
      "A senha deve ter no mínimo 8 caracteres"
    );
  }
  validateErrorSenhaConfirmacaoNovoUsuario() {
    basePage.validateText(
      confirmacaoSenhaErrorTxt,
      "A confirmação de senha é obrigatória"
    );
  }

  validateErrorSenhasDiferentes() {
    basePage.validateText(
      confirmacaoSenhaErrorTxt,
      "As senhas devem ser iguais"
    );
  }

  deleteNovoUser() {
    basePage.time(2000);
    basePage.click(resultadoBusca);
    basePage.click(excluirBtn);
    basePage.click(confirmarExcluirBtn);
  }

  createNovoAdministrador(newUser) {
    this.clickBtnNovoUsuario();
    this.fillFieldNomeNovoUsuario(newUser.name);
    this.fillFieldEmailNovoUsuario(newUser.email);
    this.fillFieldSenhaNovoUsuario(newUser.password);
    this.fillFieldConfirmaSenhaNovoUsuario(newUser.password);
    this.clickRadioAdministrador();
    this.clickBtnCadastrar();
  }

  listGestor(user) {
    this.fillFieldNome(user.name);
    this.fillFieldEmail(user.email);
    this.clickBtnBuscar();
  }

  editGestor(newUserEdit) {
    basePage.time(2000);
    basePage.click(resultadoBusca);
    this.fillFieldNomeEdit(newUserEdit.name);
    this.fillFieldEmailEdit(newUserEdit.email);
    this.clickBtnConfimarEdit();
  }
}
