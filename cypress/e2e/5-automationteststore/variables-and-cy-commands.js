import HomePage from "../../page-objects/5-automationteststore/homepage";

describe("Verifying variables, cyprss commands and jquery commands", () => {
  beforeEach(() => {});

  it("Navigating to specific product pages", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Navigating to Makeup page", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("Validating properties of the Contact Us Page", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href$='contact']").click();

    // Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
    // JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embeded commands (Closure)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
