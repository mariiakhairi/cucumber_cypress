import { defineStep, Given } from "cypress-cucumber-preprocessor/steps";

defineStep("I open example page", () => {
  cy.visit("https://www.example.com");
});

defineStep("I see page title {string}", (name) => {
  cy.get("h1").should("be.visible");
  cy.get("h1").should("contain", `${name}`);
});

defineStep("I see text", () => {
  cy.get("p").should("be.visible");
});
