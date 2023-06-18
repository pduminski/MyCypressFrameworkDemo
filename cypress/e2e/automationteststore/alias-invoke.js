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

  it("Validate product thumbnail", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    // verify if we have 16 products
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail").find(".productcart").should("have.length", 12);

    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total of normal and sale products", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    // iterate through normal non sale products
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale prive items total: " + itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemsPriceTotal = 0;
        let saleItemPrice = $linkText.split("$");
        let i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPriceTotal;
        cy.log("Sale prive items total: " + saleItemsPriceTotal);
      })
      .then(() => {
        cy.log("The total price of all products:" + itemsTotal);
        expect(itemsTotal).to.eq(656.5);
      });
  });
});
