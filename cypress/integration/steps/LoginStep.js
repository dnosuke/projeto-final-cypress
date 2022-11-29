/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";

const adminLogin = require("../../fixtures/adminLogin.json");
const loginPage = new LoginPage();

context("Login", () => {
  it("Validar fazer login com sucesso", () => {
    cy.allure().feature("Login").story("Dados válidos");
    loginPage.fillFieldEmail(adminLogin.email);
    loginPage.fillFieldPassword(adminLogin.password);
    loginPage.clickBtnFazerLogin();
    loginPage.validateRedirecionarParaDashboard();
  });

  it("Validar Fazer login com dados inválidos retorna mensagem de erro 'Email ou senha inválidos'", () => {
    cy.allure().feature("Login").story("Dados inválidos");
    loginPage.fillFieldEmail("lucas");
    loginPage.fillFieldPassword("123");
    loginPage.clickBtnFazerLogin();
    loginPage.validateLoginError();
  });

  it("Validar fazer login com Email Invalido retorna mensagem de erro 'Email ou senha inválidos' ", () => {
    cy.allure().feature("Login").story("Dados inválidos");
    loginPage.fillFieldEmail("lucas@gmail.com");
    loginPage.fillFieldPassword("123");
    loginPage.clickBtnFazerLogin();
    loginPage.validateLoginError();
  });

  it("Validar Fazer login com senha incorreta retorna mensagem de erro 'Email ou senha inválidos'", () => {
    cy.allure().feature("Login").story("Dados inválidos");
    loginPage.fillFieldEmail("teste123@dbccompany.com.br");
    loginPage.fillFieldPassword("q213");
    loginPage.clickBtnFazerLogin();
    loginPage.validateLoginError();
  });

  it("Validar Fazer login sem preencher campos retorna mensagem de erro 'Email ou senha inválidos'", () => {
    cy.allure().feature("Login").story("Dados inválidos");
    loginPage.clickBtnFazerLogin();
    loginPage.validateLoginError();
  });

  it("Validar clicar no botao inscrever-se redireciona a página", () => {
    cy.allure().feature("Login").story("Dados válidos");
    loginPage.clickBtnRegistrar();
    loginPage.validateRedirecionarParaInscricao();
  });
});
