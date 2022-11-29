/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

const adminLogin = require("../../fixtures/adminLogin.json");
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

context("Dashboard", () => {
  beforeEach(() => {
    loginPage.fillFieldEmail(adminLogin.email);
    loginPage.fillFieldPassword(adminLogin.password);
    loginPage.clickBtnFazerLogin();
  });
  it("validar buscar administrador", () => {
    cy.allure().feature("Dashboard").story("Dados válidos");
    dashboardPage.fillFieldNome("batman");
    dashboardPage.fillFieldEmail("batman@dbccompany.com");
    dashboardPage.clickBtnBuscar();
  });
});
