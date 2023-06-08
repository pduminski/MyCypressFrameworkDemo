import HomePage from "../../page-objects/WebDriverUniversity/HomePage";
import ContactUsPage from "../../page-objects/WebDriverUniversity/contactUsPage";

describe("Verify that user can send message wia Contact Us form", () => {
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
});
