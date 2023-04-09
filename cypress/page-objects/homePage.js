import Urls from "./urls";

const inputsHeader = "#inputs-header";
const checkboxesHeader = "#checkbox-header";
const dropdownListHeader = "#dropdownlist-header";
const hooversHeader = "#hovers-header";
const basicAuthHeader = "#basicauth-header";
const formHeader = "#form-header";
const keyPressesHeader = "#keypresses-header";
const statusCodesHeader = "#statuscodes-header";
const iFrameHeader = "#iframe-header";
const dragAndDropHeader = "#draganddrop-header";
const addRemoveElementsHeader = "#draganddrop-header";

class HomePage {
  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }

  clickInputsTab() {
    cy.get(inputsHeader).click();
  }

  clickCheckboxesTab() {
    cy.get(checkboxesHeader).click();
  }

  clickDropdownListTab() {
    cy.get(dropdownListHeader).click();
  }

  clickHooversTab() {
    cy.get(hooversHeader).click();
  }

  clickBasicAuthTab() {
    cy.get(basicAuthHeader).click();
  }

  clickFormTab() {
    cy.get(formHeader).click();
  }

  clickKeyPressesTab() {
    cy.get(keyPressesHeader).click();
  }

  clickStatusCodesTab() {
    cy.get(statusCodesHeader).click();
  }

  clickIFrameTab() {
    cy.get(iFrameHeader).click();
  }

  clickDragAndDropTab() {
    cy.get(dragAndDropHeader).click();
  }

  clickAddRemoveElementTab() {
    cy.get(addRemoveElementsHeader).click();
  }
}

export default HomePage;
