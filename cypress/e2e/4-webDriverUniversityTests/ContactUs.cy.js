import HomePage from "../../page-objects/4-webDriverUniversity/homePage";
import ContactUsPage from "../../page-objects/4-webDriverUniversity/contactUsPage";

describe("Verify that user can send message via Contact Us form", () => {
  beforeEach(() => {});

  it("Contact Us Happy Path", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    contactUsPage.provideLastName();
    contactUsPage.provideEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheSuccessText();
    contactUsPage.verifyUrlAddressAfterTest();
  });

  it("Contact Us grumpy path missing mandatory field - First Name", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    // contactUsPage.provideFirstName();
    contactUsPage.provideLastName();
    contactUsPage.provideEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheMissingField();
  });

  it("Contact Us grumpy path missing mandatory field - Last Name", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    // contactUsPage.provideLastName();
    contactUsPage.provideEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheMissingField();
  });

  it("Contact Us grumpy path missing mandatory field - Email Address", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    contactUsPage.provideLastName();
    // contactUsPage.provideEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheMissingField();
  });

  it("Contact Us grumpy path missing mandatory field - Message", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    contactUsPage.provideLastName();
    contactUsPage.provideEmailAddress();
    // contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheMissingField();
  });

  it("Contact Us grumpy path incorrect value - Email Address", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    contactUsPage.provideLastName();
    contactUsPage.provideInvalidEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    // contactUsPage.validationOfTheMissingField();
    contactUsPage.validationOfTheIncorrectEmailAddress();
  });

  it("Contact Us grumpy path incorrect value and missing value - Email Address incorrect, last name missing", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    contactUsPage.provideFirstName();
    // contactUsPage.provideLastName();
    contactUsPage.provideInvalidEmailAddress();
    contactUsPage.provideMessage();

    contactUsPage.clickSubmitButton();

    contactUsPage.validationOfTheMissingField();
    contactUsPage.validationOfTheIncorrectEmailAddress();
  });

  it("Contact Us page validation using cy.document", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("Contact Us page validation using cy.title", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickContactUs();

    const contactUsPage = new ContactUsPage();
    contactUsPage.verifyUrlAddressBeforeTest();

    cy.title().should("include", "WebDriver | Contact Us");
  });
});
