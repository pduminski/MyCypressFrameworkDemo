import HomePage from "../../page-objects/5-automationteststore/homepage";

describe("Inspect Automation Test Store items using cain of commands", () => {
  beforeEach(() => {});

  it("Click on the first item using item header", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get(
      "#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });

  it("Click on the first item using item text", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });

  it("Click on the first item using index", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
