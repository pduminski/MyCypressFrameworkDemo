const calendarInputField = "input[id='start']";

class DatePickerdPage {
  clickDatePickerAndChooseDate() {
    cy.get(calendarInputField)
      .invoke("val", "2020-01-01")
      .should("have.value", "2020-01-01");

    // another way
    // cy.get("#start").type("2023-01-01").should("have.value", "2023-01-01");
  }
}

export default DatePickerdPage;
