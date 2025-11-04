it.only("Visit Test", () => {
  // === Visit URL === //
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // === Visit URL === //
  cy.wait(3000); // Wait for 3 seconds
});
