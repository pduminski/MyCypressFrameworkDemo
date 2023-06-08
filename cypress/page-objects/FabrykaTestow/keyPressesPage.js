const inputField = "input[id='target']";
const message = "p[id='keyPressResult']";

class KeyPressesPage {
  pressStandardKey() {
    cy.get(inputField).type("B").should("not.have.value", "B");
    cy.get(message).should("contain.text", "B");

    cy.get(inputField).type(" ").should("not.have.value", " ");
    cy.get(message).should("contain.text", "SPACE");
  }
}

export default KeyPressesPage;
