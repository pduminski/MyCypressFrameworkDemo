import Urls from "../urls";

const contactUsHeader = "a[href='Contact-Us/contactus.html']";

class HomePage {
  visitPage() {
    const url = new Urls();
    url.visitWebDriverUniversity();
  }

  // make sure to learn how to open in the same tab and not in new tab
  clickContactUs() {
    cy.get(contactUsHeader).invoke("attr", "target", "_self").click();
  }
}

export default HomePage;
