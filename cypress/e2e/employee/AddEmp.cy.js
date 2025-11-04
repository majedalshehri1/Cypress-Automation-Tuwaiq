it.only("Add Employee Tests", () => {
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
