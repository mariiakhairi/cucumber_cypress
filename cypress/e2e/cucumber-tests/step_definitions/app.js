import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I open example page", () => {
  cy.visit("https://www.example.com");
});

Then(`I see page title {string}`, (name) => {
  cy.get("h1").should("be.visible");
  cy.get("h1").should("contain", `${name}`);
});

And("I see text", () => {
  cy.get("p").should("be.visible");
});
