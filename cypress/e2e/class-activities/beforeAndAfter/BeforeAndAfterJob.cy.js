before("Visit and Login OrangeHRM", () => {
  localStorage.clear(); // Clear local storage
  cy.clearCookies(); // Clear cookies
  // === Visit URL === //
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // === Visit URL === //
  cy.wait(3000); // Wait for 3 seconds
  // === Login Steps === //
  // Select username field and type username
  cy.get('[name="username"]').type("Admin");
  cy.wait(3000); // Wait for 3 seconds
  // Select password field and type password
  cy.get('[name="password"]').type("admin123");
  cy.wait(3000); // Wait for 3 seconds
  // Select login button and click
  cy.get('button[type="submit"]').click();
  cy.wait(5000); // Wait for 5 seconds
  // === Login Steps === //
});
// ====================== Add And Delete Job Functionality ================= //
it("Add Job Tests", () => {
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
it("Delete Job Tests", () => {
  // === Delete and Search Job by assertion === //
  // assertion
  cy.get(".oxd-table-body")
    .should("contain", "Software Tester Ma 123")
    .then(() => cy.log("Job title verified"));
  cy.wait(4000); // First find the exact row containing your job title and scrollview
  cy.contains(".oxd-table-row", "Software Tester Ma 123")
    .scrollIntoView({ duration: 300 })
    .should("exist")
    .within(() => {
      // checkbox click
      cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click({
        force: true,
      }); // click trash
      cy.get(":nth-child(1) > .oxd-icon")
        .should("be.visible")
        .click({ force: true, multiple: true });
    });
  cy.wait(1000);
  cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
  // === Delete and Search Job by assertion === //
});
// ====================== Add And Delete Job Functionality ================= //

after("Logout from OrangeHRM", () => {
  // === Logout Steps === //
  cy.wait(5000);
  // Click on user dropdown
  cy.get(".oxd-userdropdown-tab").click();
  cy.wait(5000);
  // Click on logout option
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
  cy.wait(5000);
  // === Logout Steps === //
});
