import HomePage from "../../page-objects/5-automationteststore/homepage";

describe("Alias and invoke", () => {
  beforeEach(() => {});

  it("Validate a specific hair care product", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it.only("Validate product thumbnail", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    // verify if we have 16 products
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail").find(".productcart").should("have.length", 12);

    cy.get("@productThumbnail").find(".productcart").invoke("attr", "title");
  });
});
