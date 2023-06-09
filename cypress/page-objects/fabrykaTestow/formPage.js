const firstName = "input[name = 'fname']";
const lastName = "input[name = 'lname']";
const submitButton = "#formSubmitButton";

// TODO move those fields somewhere else or use faker
const fname = "Thomas";
const lname = "Shelby";

class FormPage {
  submitFormProvidingAllMandatoryData() {
    cy.get(firstName).type(fname).should("have.value", fname);
    cy.get(lastName).type(lname).should("have.value", lname);

    this.clickSubmitButton();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("success");
    });
  }

  submitFormWithoutProvidingOneOfTheMandatoryFields() {
    cy.get(firstName).type(fname).should("have.value", fname);

    this.clickSubmitButton();

    // ASK MAXIU
    //     cy.get('#item:invalid')
    //   .invoke('prop', 'validationMessage')
    //   .should('equal', 'Please fill out this field.')
  }

  clickSubmitButton() {
    cy.get(submitButton).click();
  }
}

export default FormPage;
