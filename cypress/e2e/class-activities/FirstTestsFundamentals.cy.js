// Test Case: Visit And Login
it.only("Visit And Login", () => {
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

  // ====================== Add And Delete Employee Functionality ================= //

  // === Add Employee === //
  // Select Admin Section and click
  // cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select Add Button and click
  // cy.get(".orangehrm-header-container > .oxd-button").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select Employee Name Field and type name (Trick Part)
  // cy.get(".oxd-autocomplete-text-input > input").type("a");
  // cy.wait(3000);
  // cy.get(".oxd-autocomplete-dropdown > :nth-child(1)").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select username field and type username
  // cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "majedalshreri123"
  // );
  // cy.wait(3000); // Wait for 3 seconds
  // // Select user role dropdown and select and click
  // cy.get(
  //   ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  // ).click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select ESS option and click (option 2)
  // cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select status dropdown and select and click
  // cy.get(
  //   ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  // ).click();
  // cy.wait(3000);
  // // Select Enabled option and click (option 2)
  // cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select password field and type password
  // cy.get(
  //   ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
  // ).type("Test@1234");
  // cy.wait(3000); // Wait for 3 seconds
  // // Select confirm password field and type password
  // cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
  //   "Test@1234"
  // );
  // cy.wait(3000); // Wait for 3 seconds
  // // Select Save Button and click
  // cy.get(".oxd-button--secondary").click();
  // cy.wait(5000); // Wait for 5 seconds
  // // === Add Employee === //

  // // === Search And Delete Employee === //
  // // Select username field and type username
  // // Select Admin Section and click
  // cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select username field and type username
  // cy.get(":nth-child(2) > .oxd-input").type("majedalshreri123");
  // cy.wait(3000); // Wait for 3 seconds
  // // Select User Role Dropdown and click
  // cy.get(
  //   ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  // ).click();
  // cy.wait(3000);
  // // Select Admin Option and click (option 1)
  // cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  // cy.wait(3000);
  // // Select Button Search and click
  // cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select The Remove icon (Trash) and click
  // cy.get(".oxd-table-cell-actions > :nth-child(1)").click();
  // cy.wait(3000); // Wait for 3 seconds
  // // Select The Confirm Delete Button and click
  // cy.get(".oxd-button--label-danger").click();
  // cy.wait(3000); // Wait for 3 seconds

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

  // ====================== Add And Delete Employee Functionality ================= //

  // ====================== Add And Delete Job Functionality ================= //

  // === Add Job === //
  // // Select Admin Section and click
  // cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  // cy.wait(5000); // Wait for 5 seconds
  // // Select Job Dropdown and click
  // cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
  // cy.wait(3000);
  // // Select Job Titles and click
  // cy.get(".oxd-dropdown-menu > :nth-child(1)").click();
  // cy.wait(3000);
  // // Select Add Button and click
  // cy.get(".oxd-button").click();
  // cy.wait(3000);
  // // Select Job Title Field and type job title
  // cy.get(":nth-child(2) > .oxd-input").type("Software Tester Ma 123");
  // cy.wait(3000); // Wait for 3 seconds
  // // Select Job Description Field and type job description
  // cy.get(
  //   ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
  // ).type("This is a job description for Software Tester Ma 123");
  // cy.wait(3000);
  // // Select Upload File Button and upload file
  // cy.get(".oxd-file-button").click();
  // cy.wait(3000);
  // // Add file path in the input field
  // cy.get('[type="file"]').selectFile(
  //   "cypress/fixtures/upload/ISTQBTestPDF.pdf",
  //   { force: true }
  // );
  // cy.wait(3000);
  // // Select Note Field and type note
  // cy.get(
  //   ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
  // ).type("This is a note for Software Tester Ma 123");
  // cy.wait(3000);
  // // Select Save Button and click
  // cy.get(".oxd-button--secondary").click();
  // cy.wait(5000); // Wait for 5 seconds

  // === Add Job === //

  // === Delete and Search Job by assertion === //
  // // assertion
  // cy.get(".oxd-table-body")
  //   .should("contain", "Software Tester Ma 123")
  //   .then(() => cy.log("Job title verified"));
  // cy.wait(4000); // First find the exact row containing your job title and scrollview
  // cy.contains(".oxd-table-row", "Software Tester Ma 123")
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
  // === Delete and Search Job by assertion === //

  // ====================== Add And Delete Job Functionality ================= //

  // ====================== My Info Functionality ================= //

  // // Select My Info Section and click
  // cy.get(":nth-child(6) > .oxd-main-menu-item").click();
  // cy.wait(5000); // Wait for 5 seconds
  // // Select Avatar to upload new image and click
  // cy.get(".employee-image").click();
  // cy.wait(3000);
  // // Select + Upload Photo Button and upload file
  // cy.get(".oxd-file-div > .oxd-icon-button").click();
  // cy.wait(3000);
  // // Add file path in the input field
  // cy.get('[type="file"]').selectFile("cypress/fixtures/upload/avatarTest.jpg", {
  //   force: true,
  // });
  // cy.wait(3000);
  // // Select Save Button and click
  // cy.get(".oxd-button").click();
  // cy.wait(10000); // Wait for 5 seconds
  // // Seclect Personal Details Section and click
  // cy.get(":nth-child(1) > .orangehrm-tabs-item").click();
  // cy.wait(3000);
  // // Select First Name Field and clear then type new first name
  // cy.get('[name="firstName"]').clear().type("Majed");
  // cy.wait(3000);
  // // Select Middle Name Field and clear then type new middle name
  // cy.get('[name="middleName"]').clear().type("Ahmed");
  // cy.wait(3000);
  // // Select Last Name Field and clear then type new last name
  // cy.get('[name="lastName"]').clear().type("Alshreri");
  // cy.wait(3000);
  // // Select Employee Id Field and clear then type new employee id
  // cy.get('[name="lastName"]').clear().type("12345");
  // cy.wait(3000);
  // // Select License Number Field and clear then type new license number
  // cy.get(
  //   ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  // )
  //   .clear()
  //   .type("98765");
  // cy.wait(3000);
  // // Select Driver's License number Field and clear then type new driver's license number
  // cy.get(
  //   ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  // )
  //   .clear()
  //   .type("DL1234567");
  // cy.wait(3000);
  // //Select License Expiry Date Field and type date
  // cy.get(
  //   ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  // )
  //   .clear()
  //   .type("2020-12-31");
  // cy.wait(3000);
  // // Select chansel button and click
  // cy.get(".--close").click();
  // cy.wait(3000);
  // // Select Nationality Dropdown and select and click
  // cy.get(
  //   ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  // ).click();
  // cy.wait(3000);
  // // Select Nationality Option and click (option 5 - Saudi Arabian)
  // cy.get(".oxd-select-dropdown > :nth-child(6)").click();
  // cy.wait(3000);
  // // Select Marital Status Dropdown and select and click
  // cy.get(
  //   ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
  // ).click();
  // cy.wait(3000);
  // // Select Marital Status Option and click (option 2 - Married)
  // cy.get(".oxd-select-dropdown > :nth-child(3)").click();
  // cy.wait(3000);
  // // Select Birthday Field and type date
  // cy.get(
  //   ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
  // )
  //   .clear()
  //   .type("1999-01-15");
  // cy.wait(3000);
  // // Select Radio Button
  // cy.get(
  //   ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
  // ).click();
  // cy.wait(3000);
  // // Select Save Button and click
  // cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button").click();
  // cy.wait(5000); // Wait for 5 seconds
  // ====================== My Info Functionality ================= //
});
