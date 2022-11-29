/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

context("Dashboard", () => {
  beforeEach(() => {
    loginPage.fillFieldEmail("batman@dbccompany.com.br");
    loginPage.fillFieldPassword("123");
    loginPage.clickBtnFazerLogin();
  });
  it("validar buscar administrador", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.fillFieldNome("batman");
    dashboardPage.fillFieldEmail("batman@dbccompany.com");
    dashboardPage.clickBtnBuscar();
  });
});
