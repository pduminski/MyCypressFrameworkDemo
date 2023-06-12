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
});
