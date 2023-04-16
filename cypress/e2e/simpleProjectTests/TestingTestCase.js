import HomePage from "../../page-objects/homePage";
import AddRemoveElementsPage from "../../page-objects/addRemoveElementsPage";

describe("Test Scenario to experiment on given test cases", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add 1 element and remove it", () => {
    const homePage = new HomePage();
    homePage.clickAddRemoveElementTab();

    const addRemoveElementPage = new AddRemoveElementsPage();
    // Add element and verify buttons quantity
    addRemoveElementPage.showDeleteButtonsQuantity();
    addRemoveElementPage.clickAddElementButton(1);
    addRemoveElementPage.showDeleteButtonsQuantity();

    // Remove added element and verfiy buttons quantity
    addRemoveElementPage.clickAllDeleteButtons();
    addRemoveElementPage.showDeleteButtonsQuantity();
  });

  it("Add several elements and remove all", () => {
    const homePage = new HomePage();
    homePage.clickAddRemoveElementTab();

    const addRemoveElementPage = new AddRemoveElementsPage();

    // Add several elements and verify buttons quantity
    addRemoveElementPage.showDeleteButtonsQuantity();
    addRemoveElementPage.clickAddElementButton(3);

    // Remove element by element until we have 0
    addRemoveElementPage.showDeleteButtonsQuantity();
    addRemoveElementPage.clickAllDeleteButtons();
    addRemoveElementPage.showDeleteButtonsQuantity();
  });
});
