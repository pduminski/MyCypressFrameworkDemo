describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(
      Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html"
    );
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");

    cy.webdriverUni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get("textarea.feedback-input").type("How can I learn Cypress?");
    // cy.get('[type="submit"]').click();
    // cy.get("body").contains("Error: all fields are required");

    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
