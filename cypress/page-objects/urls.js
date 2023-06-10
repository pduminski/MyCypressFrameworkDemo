class Urls {
  visitHomePage() {
    const url = "/";
    cy.visit(url);
  }

  visitWebDriverUniversity() {
    const url = "http://www.webdriveruniversity.com";
    cy.visit(url);
  }

  visitWAutomationteststore() {
    const url = "https://www.automationteststore.com/";
    cy.visit(url);
  }
}

export default Urls;
