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
});
