import BasePage from "./BasePage";

const basePage = new BasePage();

// INPUTS
const nomeInput = "#s1-candidato-nome";
const emailInput = "#s1-candidato-email";
const telefoneInput = "#s1-candidato-telefone";
const RGInput = "#s1-candidato-rg";
const CPFInput = "#s1-candidato-cpf";
const estadoSelect = "#s1-candidato-estado";
const cidadeInput = "#s1-candidato-cidade";
const instituicaoInput = "#s2-candidato-instituicao";
const cursoInput = "#s2-candidato-curso";
const githubInput = "#s2-candidato-github";
const motivoInput = "#s2-candidato-motivo";

// CHECKBOX
const desafioCheckbox = "#s2-candidato-desafio";
const problemasCheckbox = "#s2-candidato-problemas";
const reconhecimentoCheckbox = "#s2-candidato-reconhecimento";
const altruismoCheckbox = "#s2-candidato-altruismo";
const outroCheckbox = "#s2-candidato-outro";
const lgpdCheckbox = "#s2-candidato-lgpd";

// RADIOS
const simRadio = "#s2-candidato-matriculado-sim";
const naoRadio = "#s2-candidato-matriculado-nao";
const manhaRadio = "#s2-candidato-turno-manha";
const tardeRadio = "#s2-candidato-turno-tarde";
const noiteRadio = "#s2-candidato-turno-noite";

// BUTTONS
const proximoBtnS1 = "#s1-candidato-enviar";
const proximoBtnS2 = "#s2-candidato-enviar";
const proximoBtnS3 = "#s3-candidato-enviar";
const voltarBtn = ".css-mbtjm9";
const curriculoBtn = ".css-160di52 > .MuiButtonBase-root";

// TEXTS
const tituloTxt =
  ":nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label";
const confirmacaoTxt = ".MuiAlert-message > .MuiTypography-root";
const nomeErrorTxt =
  "#s1-candidato-registrar > :nth-child(1) > .MuiTypography-root";
const lgpdErrorTxt = ".MuiBox-root > .MuiTypography-caption";
const emailErrorTxt =
  "#s1-candidato-registrar > :nth-child(2) > .MuiTypography-root";
const cpfErrorTxt = ":nth-child(3) > .MuiTypography-root";
const cidadeErrorTxt = ":nth-child(7) > .MuiTypography-root";
const rgErrorTxt = ":nth-child(5) > .MuiTypography-root";
const telefoneErrorTxt = ":nth-child(4) > .MuiTypography-root";
const instituicaoErrorTxt =
  "#s2-candidato-registrar > :nth-child(3) > .MuiTypography-root";
const instituicaoSuperiorErrorTxt = ".css-gswnji > .MuiTypography-root";
const cursoErrorTxt =
  "#s2-candidato-registrar > :nth-child(4) > .MuiTypography-root";
const checkboxErrorTxt = ":nth-child(5) > .css-j7qwjs > .MuiTypography-caption";
const githubErrorTxt =
  "#s2-candidato-registrar > :nth-child(6) > .MuiTypography-root";
const motivoErrorTxt = ":nth-child(5) > .css-j7qwjs > .MuiTypography-caption";

export default class CandidatePage {
  fillFieldNome(text) {
    basePage.fillInput(nomeInput, text);
  }

  fillFieldEmail(text) {
    basePage.fillInput(emailInput, text);
  }

  fillFieldTelefone(text) {
    basePage.fillInput(telefoneInput, text);
  }

  fillFieldRG(text) {
    basePage.fillInput(RGInput, text);
  }

  fillFieldCPF(text) {
    basePage.fillInput(CPFInput, text);
  }

  selectEstado(text) {
    basePage.select(estadoSelect, text);
  }

  fillFieldCidade(text) {
    basePage.fillInput(cidadeInput, text);
  }

  fillFieldInstituicao(text) {
    basePage.fillInput(instituicaoInput, text);
  }

  validateHiddenInstituicao() {
    basePage.validateNotExist(instituicaoInput);
  }

  fillFieldCurso(text) {
    basePage.fillInput(cursoInput, text);
  }

  fillFieldMotivo(text) {
    basePage.fillInput(motivoInput, text);
  }

  fillFieldGithub(text) {
    basePage.fillInput(githubInput, text);
  }

  clickCheckboxMotivo() {
    basePage.click(outroCheckbox);
  }

  clickCheckboxLGPD() {
    basePage.click(lgpdCheckbox);
  }

  clickBtnProximoStep1() {
    basePage.click(proximoBtnS1);
  }

  clickBtnProximoStep2() {
    basePage.click(proximoBtnS2);
  }

  clickBtnProximoStep3() {
    basePage.click(proximoBtnS3);
  }

  clickBtnVoltar() {
    basePage.click(voltarBtn);
  }

  clickRadioSim() {
    basePage.click(simRadio);
  }

  clickRadioNao() {
    basePage.click(naoRadio);
  }

  clickRadioManha() {
    basePage.click(manhaRadio);
  }

  clickRadioTarde() {
    basePage.click(tardeRadio);
  }

  validateBtnProximoDesabilitado() {
    basePage.validateIsDisabled(proximoBtnS2);
  }

  clickRadioNoite() {
    basePage.click(noiteRadio);
  }

  validateInscricaoCompleta() {
    basePage.validateText(
      confirmacaoTxt,
      "Você completou a sua inscrição no VemSer DBC!"
    );
  }

  validateNomeError() {
    basePage.validateText(nomeErrorTxt, "Nome inválido");
  }

  validateEmailError() {
    basePage.validateText(emailErrorTxt, "Email inválido");
  }

  validateCpfError() {
    basePage.validateText(cpfErrorTxt, "CPF inválido");
  }

  validateRgError() {
    basePage.validateText(
      rgErrorTxt,
      "O RG precisa ter no mínimo 8 caracteres"
    );
  }

  validateTelefoneError() {
    basePage.validateText(telefoneErrorTxt, "O telefone precisa ser válido.");
  }

  validateCidadeError() {
    basePage.validateText(cidadeErrorTxt, "É necessário no mínimo 3 letras");
  }

  validateLGPDError() {
    basePage.validateText(lgpdErrorTxt, "É necessário aceitar os termos");
  }

  validateInstituicaoSuperiorError() {
    basePage.validateText(
      instituicaoSuperiorErrorTxt,
      "Devido as restrições impostas pelas leis brasileiras, somente alunos que possuem vínculo com uma instituição de ensino podem se candidatar às vagas de estágio."
    );
  }

  validateCamposVaziosStep1() {
    basePage.validateText(nomeErrorTxt, "O campo de nome é obrigatório");
    basePage.validateText(emailErrorTxt, "Email obrigatório");
    basePage.validateText(cpfErrorTxt, "CPF obrigatório");
    basePage.validateText(rgErrorTxt, "RG obrigatório");
    basePage.validateText(telefoneErrorTxt, "Telefone obrigatório");
    basePage.validateText(cidadeErrorTxt, "É necessário no mínimo 3 letras");
  }

  validateCamposVaziosStep2() {
    basePage.validateText(
      instituicaoErrorTxt,
      "Preencha o campo com o nome da instituição"
    );
    basePage.validateText(
      cursoErrorTxt,
      "Preencha o campo com o nome do curso"
    );
    basePage.validateText(
      githubErrorTxt,
      "Preencha com um link correto: 'https://github.com/'"
    );
    basePage.validateText(
      motivoErrorTxt,
      "Preencha o campo 'Outro motivo' ou selecione uma das opções acima"
    );
  }
}
