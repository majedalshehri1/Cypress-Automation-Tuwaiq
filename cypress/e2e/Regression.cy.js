/*
- The Regression Test Suite it must import and run all the individual test files and it will be by organized as follows:
- 1. Visit Test
- 2. Login Test
- 3. Add Employee Test
- 4. Search and Delete Employee Test
- 5. Add Job Test
- 6. Search and Delete Job Test
- 7. My Info Test
- 8. Logout Test
-
- Each test file should contain only one 'it' block with the respective test case.
- The Regression Test Suite should ensure that all tests are executed in the specified order.
- Make sure to handle any necessary setup or teardown within each individual test file as needed.
*/
import "./loginAndVisitAndLogout/Visit.cy.js";
import "./loginAndVisitAndLogout/Login.cy.js";
import "./employee/AddEmp.cy.js";
import "./employee/SearchAndDeleteEmp.cy.js";
import "./job/AddJob.cy.js";
import "./job/SearchAndDeleteJob.cy.js";
import "./myInfo/MyInfo.cy.js";
import "./loginAndVisitAndLogout/Logout.cy.js";
