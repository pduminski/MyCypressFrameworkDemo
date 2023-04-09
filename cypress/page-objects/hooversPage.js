/// <reference types="cypress" />

const hidenElement = ".figcaption";

class HooversPage {
  hooverOverElement() {
    cy.get(hidenElement)
      .first()
      .should("be.hidden")
      .invoke("show")
      .should("be.visible");
  }
}

export default HooversPage;
