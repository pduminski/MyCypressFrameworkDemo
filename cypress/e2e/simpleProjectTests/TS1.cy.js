import HomePage from "../../page-objects/homePage";
import InputsPage from "../../page-objects/inputsPage";
import CheckboxesPage from "../../page-objects/checkboxesPage";
import DropdownListPage from "../../page-objects/dropdownlistPage";
import HooversPage from "../../page-objects/hooversPage";
import BasicAuthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import KeyPressesPage from "../../page-objects/keyPressesPage";
import StatusCodesPage from "../../page-objects/statusCodesPage";
import IFramePage from "../../page-objects/iFramePage";
import DatePickerdPage from "../../page-objects/datePickerPage";

describe("Verify that all 12 functional tabs on the page work as intended", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1 - checkboxes tests", () => {
    const homePage = new HomePage();
    homePage.clickCheckboxesTab();

    const checkboxesPage = new CheckboxesPage();
    checkboxesPage.checkFirstCheckbox();
    checkboxesPage.uncheckSecondCheckbox();
  });

  it("2 - date picker tests", () => {
    const homePage = new HomePage();
    homePage.clickDatePickerTab();

    const datePickerPage = new DatePickerdPage();
    datePickerPage.clickDatePickerAndChooseDate();
  });

  it("3 - hoovers tests", () => {
    const homePage = new HomePage();
    homePage.clickHooversTab();

    const hooverPage = new HooversPage();
    hooverPage.hooverOverElement();
  });

  it("4 - inputs tests", () => {
    const homePage = new HomePage();
    homePage.clickInputsTab();

    const inputsPage = new InputsPage();
    inputsPage.typeNumberIntoField();
    inputsPage.typeLettersIntoField();
  });

  it("5 - basic auth POSITIVE tests", () => {
    const homePage = new HomePage();
    homePage.clickBasicAuthTab();

    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.provideValidCredentials();
  });

  it("5 - basic auth NEGATIVE tests", () => {
    const homePage = new HomePage();
    homePage.clickBasicAuthTab();

    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.provideInvalidCredentials();
  });

  it("6 - form POSITIVE tests", () => {
    const homePage = new HomePage();
    homePage.clickFormTab();

    const formPage = new FormPage();
    formPage.submitFormProvidingAllMandatoryData();
  });

  it("6 - form NEGATIVE tests", () => {
    const homePage = new HomePage();
    homePage.clickFormTab();

    const formPage = new FormPage();
    formPage.submitFormWithoutProvidingOneOfTheMandatoryFields();
  });

  it("7 - dropdown list tests", () => {
    const homePage = new HomePage();
    homePage.clickDropdownListTab();

    const dropdownListPage = new DropdownListPage();
    dropdownListPage.chooseTheFirstOption();
  });

  it("8 - key presses tests", () => {
    const homePage = new HomePage();
    homePage.clickKeyPressesTab();

    const keyPressesPage = new KeyPressesPage();
    keyPressesPage.pressStandardKey();
  });

  it("9 - drag and drop tests", () => {
    assert(false); // TODO Functionality
  });

  it("10 - add/remove elements tests", () => {
    assert(false); // TODO Functionality
  });

  it("11 - status codes tests", () => {
    const homePage = new HomePage();
    homePage.clickStatusCodesTab();

    const statusCodesPage = new StatusCodesPage();
    statusCodesPage.testStatusCode200();
    statusCodesPage.testStatusCode305();
    statusCodesPage.testStatusCode404();
    statusCodesPage.testStatusCode500();
  });

  it("12 - iframe tests", () => {
    const homePage = new HomePage();
    homePage.clickIFrameTab();

    const iframePage = new IFramePage();
    iframePage.clickButton1();
    iframePage.clickButton2();
  });
});
