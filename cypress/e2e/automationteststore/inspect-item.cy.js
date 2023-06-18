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

    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        console.log("Selected the folowing item:" + itemHeaderText.text());
      });
  });

  it("Click on the first item using index", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });

  it("Click on Contact Us and take the string out of it", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get(".info_links_footer")
      .find(
        "a[href='https://automationteststore.com/index.php?rt=content/contact']"
      )
      .click()
      .then((linkName) => {
        cy.log("Found Text:" + linkName.text());
      });
  });

  it.only("Click on Contact Us and take the string out of it", () => {
    const homePage = new HomePage();
    homePage.visitPage();

    cy.get("a[href$='contact']")
      .click()
      .then((linkName) => {
        cy.log("Found Text:" + linkName.text());
      });
  });
});
