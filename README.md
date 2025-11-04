# Cypress Automation – Tuwaiq Bootcamp

<p align="center">
  <img src="https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png" width="200"/>
</p>

This repository contains my end-to-end test automation project using Cypress.
It was developed during the Tuwaiq Bootcamp as part of learning and practicing real world software test automation.

## What’s included in this project?

- Visit Page Test
- Login Test
- Add Employee Test
- Search & Delete Employee Test
- Add Job Test
- Search & Delete Job Test
- MyInfo Test
- Logout Test
- Full Regression Test Suite that runs all above tests

---

## 📁 Project Structure 
```bash

cypress/
 └─ e2e/
     ├─ employee/
     │   ├─ AddEmp.cy.js
     │   └─ SearchAndDeleteEmp.cy.js
     ├─ job/
     │   ├─ AddJob.cy.js
     │   └─ SearchAndDeleteJob.cy.js
     ├─ loginAndVisitAndLogout/
     │   ├─ Login.cy.js
     │   ├─ Visit.cy.js
     │   └─ Logout.cy.js
     ├─ myInfo/
     │   └─ MyInfo.cy.js
     └─ Regression.cy.js   <-- Main Test Suite (runs all tests in order)

```

---

### ⚙️ Cypress Configuration Notes

Inside `cypress.config.js` we enabled video recording and disabled test isolation:

```bash
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // === Step1: Enable video recording === //
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // === Step2: Disable test isolation === //
    testIsolation: false,
  },
});

```
---

## How to Run The Tests

#### Step 1 – Install dependencies

``` bash
npm install
```
#
#### Step 2 – Run Cypress UI (for manual selection)

``` bash
npx cypress open
```
#
#### Step 3 – Run Full Regression Suite (with videos + screenshots)

``` bash
npx cypress run --browser chrome --headed --spec "cypress/e2e/Regression.cy.js"
```
--- 
## 🧪 What is Regression Testing?

Regression Testing = After adding a new feature or making any system changes, we re-run old test cases to make sure nothing got broken.

The file `Regression.cy.js` is responsible for doing that.
It imports all test files and executes them one by one in the correct order.

---

## ✅ Clone This Repository

Anyone can clone and run this project:
```bash
git clone https://github.com/majedalshehri1/Cypress-Automation-Tuwaiq.git

cd Cypress-Automation-Tuwaiq

npm install

npx cypress open
```
