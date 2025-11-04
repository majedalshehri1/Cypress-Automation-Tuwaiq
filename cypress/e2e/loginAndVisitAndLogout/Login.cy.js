it.only("Login Test", () => {
  // === Login Steps === //
  cy.wait(3000); // Wait for 3 seconds
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
