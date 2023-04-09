const dropdown = "select";

class DropdownListPage {
  chooseTheFirstOption() {
    cy.get(dropdown).select("Option 1").should("have.value", "1");
  }
}

export default DropdownListPage;
