const iframe = "iframe";
const button1 = "#simpleButton1";
const button2 = "#simpleButton2";
const whichButtonIsClickedMessage = "#whichButtonIsClickedMessage";

class IFramePage {
  clickButton1() {
    const iframeTest = cy
      .get(iframe)
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframeTest.find(button1).click();

    // check how is it done with cypress-iframe library
  }

  clickButton2() {
    const iframeTest = cy
      .get(iframe)
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframeTest.find(button2).click();

    // to do some asertions on button clicked
  }
}

export default IFramePage;
