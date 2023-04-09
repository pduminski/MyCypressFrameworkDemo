const username = "input[name='username']";
const password = "input[name='password']";
const submitButton = "button";
const submitButtonLabel = "Login";
const loginFormMessage = "#loginFormMessage";
const loginFormMessageNegative = "Invalid credentials";
const loggedInMessage = "#loggedInMessage";
const loggedInMessageText = "You are logged in!";
const returnToHomePageButton = "button[id='retrun button']";

// credentials TODO try to find another place for those
const validName = "admin";
const validPassword = "admin";
const invalidName = "Pawel";
const invalidPassword = "123";

class BasicAuthPage {
  provideValidCredentials() {
    cy.get(username).type(validName).should("have.value", validName);
    cy.get(password).type(validPassword).should("have.value", validPassword);

    this.clickSubmitButton();

    cy.get(loggedInMessage)
      .should("be.visible")
      .and("have.text", loggedInMessageText);

    cy.get(returnToHomePageButton).click();
    cy.url().should("eq", "http://simpletestsite.fabrykatestow.pl/index.html");
  }

  provideInvalidCredentials() {
    this.clearBothFields();
    cy.get(username).type(invalidName).should("have.value", invalidName);
    cy.get(password)
      .type(invalidPassword)
      .should("have.value", invalidPassword);

    this.clickSubmitButton();

    cy.get(loginFormMessage).should("have.text", loginFormMessageNegative);
  }

  clickSubmitButton() {
    cy.get(submitButton).contains(submitButtonLabel).click();
  }

  clearBothFields() {
    cy.get(username).clear();
    cy.get(password).clear();
  }
}

export default BasicAuthPage;
