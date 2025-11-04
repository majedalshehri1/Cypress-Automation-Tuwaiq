it.only("Delete Employee Tests", () => {
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
