/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const adminLogin = require("../../fixtures/adminLogin.json");
const newUser = require("../../fixtures/newUser.json");
const newUserEdit = require("../../fixtures/newUserEdit.json");
const basePage = new BasePage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

context("Dashboard", () => {
  beforeEach(() => {
    loginPage.fillFieldEmail(adminLogin.email);
    loginPage.fillFieldPassword(adminLogin.password);
    loginPage.clickBtnFazerLogin();
  });
  it("validar buscar gestor pelo nome com sucesso", () => {
    cy.allure().feature("Filtro").story("Dados válidos");
    dashboardPage.fillFieldNome("admin");
    dashboardPage.clickBtnBuscar();
    dashboardPage.validateBuscarGestorNome("ADMIN");
  });

  it("validar buscar gestor pelo email com sucesso", () => {
    cy.allure().feature("Filtro").story("Dados válidos");
    dashboardPage.fillFieldEmail("admin@dbccompany.com.br");
    dashboardPage.clickBtnBuscar();
    dashboardPage.validateBusacarGestorEmail("admin@dbccompany.com.br");
  });

  it("validar criar gestor com sucesso", () => {
    dashboardPage.createNovoAdministrador(newUser);
    dashboardPage.validateCadastroComSucesso();
    dashboardPage.deleteNovoUser(newUser);
  });
  it.only("validar editar gestor com sucesso", () => {
    dashboardPage.createNovoAdministrador(newUser);
    basePage.time(2000);
    dashboardPage.listGestor(newUser);
    dashboardPage.editGestor(newUserEdit);
    basePage.time(2000);
    dashboardPage.listGestor(newUser);
    dashboardPage.deleteNovoUser();
  });

  it("validar excluir gestor com sucesso", () => {
    dashboardPage.createNovoAdministrador(newUser);
    basePage.time(2000);
    dashboardPage.deleteNovoUser(newUser);
    dashboardPage.validateDeletarUserSucesso();
  });
  /*   it("validar buscar inscricao com sucesso", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    // login e ir para dashboard e cliclar em inscricoes
    dashboardPage.fillFieldPesquisaInscricoes("nome");
    dashboardPage.clickBtnBuscarInscricao();
  });

  it("validar buscar inscricao com nome inexistente", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    // login e ir para dashboard e cliclar em inscricoes
    dashboardPage.fillFieldPesquisaInscricoes("nome");
    dashboardPage.clickBtnBuscarInscricao();
  }); */
});
