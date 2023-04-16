import HomePage from "../../page-objects/homePage";
import DragAndDropPage from "../../page-objects/dragAndDropPage";

describe("EXPERIMENTAL TEST CASES", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TODO", () => {
    const homePage = new HomePage();
    homePage.clickDragAndDropTab();
    const dragAndDropPage = new DragAndDropPage();
    dragAndDropPage.dragAndDropElement();
  });
});
