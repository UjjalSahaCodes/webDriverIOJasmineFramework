const retirementCalculatorPage = require("../pageobjects/retirementCalculator.page");

describe("Retirement Savings Calculator", () => {
  beforeEach(async function () {
    await retirementCalculatorPage.navigate();
  });

  it("should allow user to fill and submit the form", async () => {
    await retirementCalculatorPage.fillForm();

    await retirementCalculatorPage.fillDefaultCalculatorValues();

    await retirementCalculatorPage.clickOnCalculateButton();
  });
});
