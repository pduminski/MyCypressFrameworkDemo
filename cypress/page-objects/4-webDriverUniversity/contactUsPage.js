const firstNameField = "input[name='first_name']";
const lastNameField = "input[name='last_name']";
const emailAddressField = "input[name='email']";
const messageField = "textarea[name='message']";
const submitButton = "input[type='submit']";
const resetButton = "input[type='reset']";

const firstName = "Bilbo";
const lastName = "Baggins";
const emailAddress = "testBilbo@test.com";
const invalidEmailAddress = "testBilbotest";
const message = "Buying here is a pleasure";

class ContactUsPage {
  provideFirstName() {
    cy.get(firstNameField).type(firstName).should("have.value", firstName);
  }

  provideLastName() {
    cy.get(lastNameField).type(lastName).should("have.value", lastName);
  }

  provideEmailAddress() {
    cy.get(emailAddressField)
      .type(emailAddress)
      .should("have.value", emailAddress);
  }

  provideInvalidEmailAddress() {
    cy.get(emailAddressField)
      .type(invalidEmailAddress)
      .should("have.value", invalidEmailAddress);
  }

  provideMessage() {
    cy.get(messageField).type(message).should("have.value", message);
  }

  clickSubmitButton() {
    cy.get(submitButton).click();
  }

  verifyUrlAddressBeforeTest() {
    cy.url().should("include", "/Contact-Us/contactus.html");
  }

  verifyUrlAddressAfterTest() {
    cy.url().should("include", "Contact-Us/contact-form-thank-you.html");
  }

  validationOfTheMissingField() {
    cy.get("body").should("include.text", "Error: all fields are required");
  }

  validationOfTheIncorrectEmailAddress() {
    cy.get("body").should("include.text", "Error: Invalid email address");
  }

  validationOfTheSuccessText() {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
}

export default ContactUsPage;
