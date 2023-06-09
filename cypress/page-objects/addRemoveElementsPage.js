/// <reference types="cypress" />

const addElementButton = 'button[onclick="addElement()"]';
const deleteButton = 'button[class="added-manually"]';
let deleteButtonQuantity = 0;

class AddRemoveElementsPage {
  //provide quantity of the buttons to be created
  clickAddElementButton(amountOfButtonsToCreate) {
    for (let i = 1; i <= amountOfButtonsToCreate; i++) {
      cy.get(addElementButton).click();
      deleteButtonQuantity++;
      this.validateDeleteButtonQuantity();
    }
  }

  clickAllDeleteButtons() {
    while (deleteButtonQuantity > 0) {
      cy.get(deleteButton).last().click();
      deleteButtonQuantity--;
      this.validateDeleteButtonQuantity();
    }
  }

  showDeleteButtonsQuantity() {
    cy.log("Delete buttons: " + deleteButtonQuantity);
  }

  // TODO, look for a little clearer version of doing that
  validateDeleteButtonQuantity() {
    if (deleteButtonQuantity === 1) {
      cy.get(deleteButton).should("be.visible");
    } else if (deleteButtonQuantity > 1) {
      cy.get(deleteButton).should("have.length", deleteButtonQuantity);
    } else {
      cy.get(deleteButton).should("not.exist");
    }
  }
}

export default AddRemoveElementsPage;
