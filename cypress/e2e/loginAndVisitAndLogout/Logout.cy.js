it.only("Logout Test", () => {
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
