/// <reference types="cypress" />
import CandidatePage from "../pages/CandidatePage";
import LoginPage from "../pages/LoginPage";

const candidate1 = require("../../fixtures/candidate1.json");
const candidatePage = new CandidatePage();
const loginPage = new LoginPage();

context("Inscrição", () => {
  beforeEach(() => {
    loginPage.clickBtnRegistrar();
  });
  it("Validar inscrição de candidato com sucesso", () => {
    cy.allure().feature("Inscrição").story("Dados válidos");
    candidatePage.fillFieldNome(candidate1.name);
    candidatePage.fillFieldEmail(candidate1.email);
    candidatePage.fillFieldCPF(candidate1.CPF);
    candidatePage.fillFieldTelefone(candidate1.phone);
    candidatePage.fillFieldRG(candidate1.RG);
    candidatePage.fillFieldCidade(candidate1.city);
    candidatePage.selectEstado(candidate1.estado);
    candidatePage.clickBtnProximoStep1();

    candidatePage.clickRadioSim();
    candidatePage.fillFieldInstituicao(candidate1.institution);
    candidatePage.fillFieldCurso(candidate1.course);
    candidatePage.clickCheckboxMotivo();
    candidatePage.fillFieldMotivo(candidate1.motivation);
    candidatePage.clickCheckboxFrontend();
    candidatePage.fillFieldConfigPC(candidate1.config);
    candidatePage.fillFieldGithub(candidate1.github);

    candidatePage.clickCheckboxLGPD();
    candidatePage.clickBtnProximoStep2();

    candidatePage.validateInscricaoCompleta();
  });

  it("Validar inscrição de candidato com dados válidos e marcando não para 'Você é matriculado em algum curso de graduação ou técnico?' retorna mensagem de erro", () => {
    cy.allure().feature("Inscrição").story("Dados válidos");
    candidatePage.fillFieldNome(candidate1.name);
    candidatePage.fillFieldEmail(candidate1.email);
    candidatePage.fillFieldCPF(candidate1.CPF);
    candidatePage.fillFieldTelefone(candidate1.phone);
    candidatePage.fillFieldRG(candidate1.RG);
    candidatePage.fillFieldCidade(candidate1.city);
    candidatePage.selectEstado(candidate1.estado);
    candidatePage.clickBtnProximoStep1();

    candidatePage.clickRadioNao();
    candidatePage.validateInstituicaoSuperiorError();
  });

  it("Validar preencher campo nome com dado inválido retorna mensagem de erro 'Nome inválido'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldNome("12314546");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateNomeError();
  });

  it("Validar preencher campo email com dado inválido retorna mensagem de erro 'Email inválido'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldEmail("abc");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateEmailError();
  });

  it("Validar preencher campo CPF com dado inválido retorna mensagem de erro 'CPF inválido'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldCPF("1224124");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateCpfError();
  });

  it("Validar preencher campo Telefone com dado inválido retorna mensagem de erro 'O telefone precisa ser válido.'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldTelefone("122");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateTelefoneError();
  });

  it("Validar preencher campo RG com dado inválido retorna mensagem de erro 'O RG precisa ter no mínimo 8 caracteres'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldRG("12314");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateRgError();
  });

  it("Validar preencher campo Cidade com dado inválido retorna mensagem de erro 'É necessário no mínimo 3 letras'", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldCidade("ta");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateCidadeError();
  });

  it("Validar não preencher campos do Step 1 com dados válidos retorna mensagens de erro", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.clickBtnProximoStep1();
    candidatePage.validateCamposVaziosStep1();
  });

  it("Validar botão 'próximo' desabilitado ao não preencher todos os campos obrigatórios do Step 2 com dados válidos", () => {
    cy.allure().feature("Inscrição").story("Dados inválidos");
    candidatePage.fillFieldNome(candidate1.name);
    candidatePage.fillFieldEmail(candidate1.email);
    candidatePage.fillFieldCPF(candidate1.CPF);
    candidatePage.fillFieldTelefone(candidate1.phone);
    candidatePage.fillFieldRG(candidate1.RG);
    candidatePage.fillFieldCidade(candidate1.city);
    candidatePage.selectEstado(candidate1.estado);
    candidatePage.clickBtnProximoStep1();

    candidatePage.clickRadioSim();
    candidatePage.fillFieldInstituicao(candidate1.institution);
    candidatePage.fillFieldCurso(candidate1.course);
    candidatePage.validateBtnProximoDesabilitado();
  });
});
