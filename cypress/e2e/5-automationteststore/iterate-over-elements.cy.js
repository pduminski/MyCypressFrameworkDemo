import HomePage from "../../page-objects/5-automationteststore/homepage";

describe("Iterate over elements", () => {
  beforeEach(() => {});

  it("Log information about all hair care products", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: ", index + " : " + $el.text());
    });
  });

  it("Add specific product to cart", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      // cy.log("Index: ", index + " : " + $el.text());

      if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
