it.only("My Info Test", () => {
  // ====================== My Info Functionality ================= //

  // Select My Info Section and click
  cy.get(":nth-child(6) > .oxd-main-menu-item").click();
  cy.wait(5000); // Wait for 5 seconds
  // Select Avatar to upload new image and click
  cy.get(".employee-image").click();
  cy.wait(3000);
  // Select + Upload Photo Button and upload file
  cy.get(".oxd-file-div > .oxd-icon-button").click();
  cy.wait(3000);
  // Add file path in the input field
  cy.get('[type="file"]').selectFile("cypress/fixtures/upload/avatarTest.jpg", {
    force: true,
  });
  cy.wait(3000);
  // Select Save Button and click
  cy.get(".oxd-button").click();
  cy.wait(10000); // Wait for 5 seconds
  // Seclect Personal Details Section and click
  cy.get(":nth-child(1) > .orangehrm-tabs-item").click();
  cy.wait(3000);
  // Select First Name Field and clear then type new first name
  cy.get('[name="firstName"]').clear().type("Majed");
  cy.wait(3000);
  // Select Middle Name Field and clear then type new middle name
  cy.get('[name="middleName"]').clear().type("Ahmed");
  cy.wait(3000);
  // Select Last Name Field and clear then type new last name
  cy.get('[name="lastName"]').clear().type("Alshreri");
  cy.wait(3000);
  // Select Employee Id Field and clear then type new employee id
  cy.get('[name="lastName"]').clear().type("12345");
  cy.wait(3000);
  // Select License Number Field and clear then type new license number
  cy.get(
    ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("98765");
  cy.wait(3000);
  // Select Driver's License number Field and clear then type new driver's license number
  cy.get(
    ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  )
    .clear()
    .type("DL1234567");
  cy.wait(3000);
  //Select License Expiry Date Field and type date
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  )
    .clear()
    .type("2020-12-31");
  cy.wait(3000);
  // Select chansel button and click
  cy.get(".--close").click();
  cy.wait(3000);
  // Select Nationality Dropdown and select and click
  cy.get(
    ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  ).click();
  cy.wait(3000);
  // Select Nationality Option and click (option 5 - Saudi Arabian)
  cy.get(".oxd-select-dropdown > :nth-child(6)").click();
  cy.wait(3000);
  // Select Marital Status Dropdown and select and click
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  ).click();
  cy.wait(3000);
  // Select Marital Status Option and click (option 2 - Married)
  cy.get(".oxd-select-dropdown > :nth-child(3)").click();
  cy.wait(3000);
  // Select Birthday Field and type date
  cy.get(
    ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  )
    .clear()
    .type("1999-01-15");
  cy.wait(3000);
  // Select Radio Button
  cy.get(
    ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
  ).click();
  cy.wait(3000);
  // Select Save Button and click
  cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button").click();
  cy.wait(5000); // Wait for 5 seconds
  // ====================== My Info Functionality ================= //
});
