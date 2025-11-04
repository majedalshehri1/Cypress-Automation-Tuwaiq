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
// ====================== Add And Delete Employee Functionality ================= //
it("Add Employee Tests", () => {
  // === Add Employee === //
  // Select Admin Section and click
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select Add Button and click
  cy.get(".orangehrm-header-container > .oxd-button").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select Employee Name Field and type name (Trick Part)
  cy.get(".oxd-autocomplete-text-input > input").type("a");
  cy.wait(3000);
  cy.get(".oxd-autocomplete-dropdown > :nth-child(1)").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select username field and type username
  cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "majedalshreri123"
  );
  cy.wait(3000); // Wait for 3 seconds
  // Select user role dropdown and select and click
  cy.get(
    ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  ).click();
  cy.wait(3000); // Wait for 3 seconds
  // Select ESS option and click (option 2)
  cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select status dropdown and select and click
  cy.get(
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  ).click();
  cy.wait(3000);
  // Select Enabled option and click (option 2)
  cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select password field and type password
  cy.get(
    ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
  ).type("Test@1234");
  cy.wait(3000); // Wait for 3 seconds
  // Select confirm password field and type password
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Test@1234"
  );
  cy.wait(3000); // Wait for 3 seconds
  // Select Save Button and click
  cy.get(".oxd-button--secondary").click();
  cy.wait(5000); // Wait for 5 seconds
  // === Add Employee === //
});
it("Delete Employee Tests", () => {
  // === Search And Delete Employee === //
  // Select username field and type username
  // Select Admin Section and click
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select username field and type username
  cy.get(":nth-child(2) > .oxd-input").type("majedalshreri123");
  cy.wait(3000); // Wait for 3 seconds
  // Select User Role Dropdown and click
  cy.get(
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  ).click();
  cy.wait(3000);
  // Select Admin Option and click (option 1)
  cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  cy.wait(3000);
  // Select Button Search and click
  cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select The Remove icon (Trash) and click
  cy.get(".oxd-table-cell-actions > :nth-child(1)").click();
  cy.wait(3000); // Wait for 3 seconds
  // Select The Confirm Delete Button and click
  cy.get(".oxd-button--label-danger").click();
  cy.wait(3000); // Wait for 3 seconds

  // === Search And Delete Employee === //

  // === Search By ( Assertion ) And Delete Employee === //
  // // assertion
  // cy.get(".oxd-table-body")
  //   .should("contain", "majedalshreri123")
  //   .then(() => cy.log("Job title verified"));
  // cy.wait(4000); // First find the exact row containing your job title and scrollview
  // cy.contains(".oxd-table-row", "majedalshreri123")
  //   .scrollIntoView({ duration: 300 })
  //   .should("exist")
  //   .within(() => {
  //     // checkbox click
  //     cy.get(":nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon").click({
  //       force: true,
  //     }); // click trash
  //     cy.get(":nth-child(1) > .oxd-icon")
  //       .should("be.visible")
  //       .click({ force: true, multiple: true });
  //   });
  // cy.wait(1000);
  // cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click(); // confirm delete
  // === Search By ( Assertion ) And Delete Employee === //
});

// ====================== Add And Delete Employee Functionality ================= //

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
