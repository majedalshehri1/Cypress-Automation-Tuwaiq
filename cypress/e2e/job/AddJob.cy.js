it.only("Add Job Tests", () => {
  // === Add Job === //
  // Select Admin Section and click
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.wait(5000); // Wait for 5 seconds
  // Select Job Dropdown and click
  cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
  cy.wait(3000);
  // Select Job Titles and click
  cy.get(".oxd-dropdown-menu > :nth-child(1)").click();
  cy.wait(3000);
  // Select Add Button and click
  cy.get(".oxd-button").click();
  cy.wait(3000);
  // Select Job Title Field and type job title
  cy.get(":nth-child(2) > .oxd-input").type("Software Tester Ma 123");
  cy.wait(3000); // Wait for 3 seconds
  // Select Job Description Field and type job description
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
  ).type("This is a job description for Software Tester Ma 123");
  cy.wait(3000);
  // Select Upload File Button and upload file
  cy.get(".oxd-file-button").click();
  cy.wait(3000);
  // Add file path in the input field
  cy.get('[type="file"]').selectFile(
    "cypress/fixtures/upload/ISTQBTestPDF.pdf",
    { force: true }
  );
  cy.wait(3000);
  // Select Note Field and type note
  cy.get(
    ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
  ).type("This is a note for Software Tester Ma 123");
  cy.wait(3000);
  // Select Save Button and click
  cy.get(".oxd-button--secondary").click();
  cy.wait(5000); // Wait for 5 seconds
  // === Add Job === //
});
