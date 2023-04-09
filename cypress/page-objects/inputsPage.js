const input = "input[type='number']";

class InputsPage {
  typeNumberIntoField() {
    cy.get(input).type("123").should("have.value", "123");
  }

  typeLettersIntoField() {
    cy.get(input).type("abc").should("not.have.value", "abc");
  }
}

export default InputsPage;
