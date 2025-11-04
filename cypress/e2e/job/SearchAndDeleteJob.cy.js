it.only("Delete Job Tests", () => {
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
