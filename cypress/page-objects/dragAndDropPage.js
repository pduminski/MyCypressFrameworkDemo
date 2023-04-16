import "@4tw/cypress-drag-drop";
// use of cypress drag & drop https://github.com/4teamwork/cypress-drag-drop

const columnA = "#column-a";
const columnB = "#column-b";

class DragAndDropPage {
  dragAndDropElement() {
    cy.get(columnA).drag(columnB);
    this.verifyColumnAAfterChange();
    this.verifyColumnBAfterChange();
  }

  verifyColumnAAfterChange() {
    cy.get(columnA)
      .find("header")
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("B");
      });
  }

  verifyColumnBAfterChange() {
    cy.get(columnB)
      .find("header")
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("A");
      });
  }
}

export default DragAndDropPage;
