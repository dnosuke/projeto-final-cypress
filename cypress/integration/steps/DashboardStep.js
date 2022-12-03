/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const adminLogin = require("../../fixtures/adminLogin.json");
const colabLogin = require("../../fixtures/colaborador.json");
const newUser = require("../../fixtures/newUser.json");
const newUser2 = require("../../fixtures/newUser2.json");
const newUser3 = require("../../fixtures/newUser3.json");
const newUserEdit = require("../../fixtures/newUserEdit.json");
const newUserEditNaoDbc = require("../../fixtures/newUserEditNaoDbc.json");
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
    dashboardPage.createNovoAdministrador(newUser);
    dashboardPage.fillFieldEmail(newUser.email);
    dashboardPage.clickBtnBuscar();
    dashboardPage.validateBuscarGestorEmail(newUser.email);
    dashboardPage.listGestor(newUser);
    dashboardPage.deleteNovoUser();
  });

  it("validar criar gestor com sucesso", () => {
    dashboardPage.createNovoAdministrador(newUser);
    dashboardPage.validateCadastroComSucesso();
    dashboardPage.listGestor(newUser);
    dashboardPage.deleteNovoUser(newUser);
  });
  it("validar editar gestor com sucesso", () => {
    dashboardPage.createNovoAdministrador(newUser3);
    basePage.time(2000);
    dashboardPage.listGestor(newUser3);
    dashboardPage.editGestor(newUserEdit);
    basePage.time(2000);
    dashboardPage.listGestor(newUserEdit);
    dashboardPage.deleteNovoUser(newUserEdit);
  });

  it("validar excluir gestor com sucesso", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.createNovoAdministrador(newUser2);
    basePage.time(2000);
    dashboardPage.listGestor(newUser2);
    dashboardPage.deleteNovoUser(newUser2);
    dashboardPage.validateDeletarUserSucesso();
  });

  it("validar editar gestor com email não @dbccompany.com.br retorna mensagem de erro 'Só é válido o email com @dbccompany.com.br'", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.createNovoAdministrador(newUser3);
    dashboardPage.listGestor(newUser3);
    dashboardPage.validatePerfilEditErrorEmailNaoDBC(newUserEditNaoDbc);
  });

  it("validar editar próprio perfil com email não @dbccompany.com.br retorna mensagem de erro 'Só é válido o email com @dbccompany.com.br'", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.validatePerfilErrorEmailNaoDBC(newUserEditNaoDbc);
  });

  it("validar não redirecionar para tela de edição de gestor quando logado com colaborador", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.clickBtnSair();
    loginPage.fillFieldEmail(colabLogin.email);
    loginPage.fillFieldPassword(colabLogin.password);
    loginPage.clickBtnFazerLogin();
    dashboardPage.listGestor(adminLogin);
    basePage.validateNaoRedirecionarPagina(
      "https://front-vemser.vercel.app/dashboard/edit-user"
    );
    dashboardPage.validateIsNotVisibleExcluir();
  });
  /*   it("validar buscar inscricao com sucesso", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.clickBtnInscricoes();
    dashboardPage.fillFieldPesquisaInscricoes("Daniel Teste");
    dashboardPage.clickBtnBuscarInscricao();
  });

  it.only("validar buscar inscricao com nome inexistente", () => {
    cy.allure().feature("Dashboard").story("Dados inválidos");
    // login e ir para dashboard e cliclar em inscricoes
    dashboardPage.clickBtnInscricoes();
    dashboardPage.fillFieldPesquisaInscricoes("z");
    dashboardPage.clickBtnBuscarInscricao();
  }); */
});
