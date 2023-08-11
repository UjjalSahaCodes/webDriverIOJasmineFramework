const elementUtil = require("../UtilityFolder/elementUtils");

class RetirementSavingsCalculatorPage {
  ///////////////////////// Elements ////////////////////////////////
  get calculatorFormSection() {
    return $("section[id='calculator-intro-section'] h2");
  }

  get currentAgeField() {
    return $("#current-age");
  }

  get retirementAgeField() {
    return $("#retirement-age");
  }
  get currentIncomeField() {
    return $("#current-income");
  }
  get spouseIncomeField() {
    return $("#spouse-income");
  }
  get currentTotalSavingsField() {
    return $("#current-total-savings");
  }
  get currentAnnualSavingsField() {
    return $("#current-annual-savings");
  }
  get savingsIncreaseRateField() {
    return $("#savings-increase-rate");
  }

  get socialBenefitsYesBtn() {
    return $("label[for='yes-social-benefits']");
  }

  get maritalStatus() {
    return $("label[for='married']");
  }

  get socialSecurityOverrideField() {
    return $("#social-security-override");
  }

  get adjustDefValBtn() {
    return $("ul[role='presentation'] a[role='button']");
  }

  get additionalIncomeField() {
    return $("//input[@id='additional-income']");
  }

  get retirementDurationField() {
    return $("#retirement-duration");
  }

  get inflationRadio() {
    return $("label[for='include-inflation']");
  }

  get retirementAnnualIncomeField() {
    return $("//input[@id='retirement-annual-income']");
  }

  get preRetirementRoiField() {
    return $("#pre-retirement-roi");
  }

  get postRetirementRoiField() {
    return $("#post-retirement-roi");
  }

  get saveChangesBtn() {
    return $("button[onclick='savePersonalizedValues();']");
  }

  get calculateBtn() {
    return $(".dsg-btn-primary.btn-block[onclick='calculateResults();']");
  }

  get inflationRateField() {
    return $("#expected-inflation-rate");
  }

  /////////////////////// Actions ////////////////////////////////

  async navigate() {
    await browser.url(
      "https://www.securian.com/insights-tools/retirement-calculator.html"
    );
    await browser.maximizeWindow();
  }

  async fillForm() {
    await this.calculatorFormSection.scrollIntoView();
    await elementUtil.fillField(this.currentAgeField, "40");
    await elementUtil.fillField(this.retirementAgeField, "40");
    await elementUtil.fillField(this.currentIncomeField, "100000");
    await elementUtil.fillField(this.spouseIncomeField, "75000");
    await elementUtil.fillField(this.currentTotalSavingsField, "500000");
    await elementUtil.fillField(this.currentAnnualSavingsField, "10");
    await elementUtil.fillField(this.savingsIncreaseRateField, "5");
    // Handling the Social Security Income toggle

    if (!(await this.socialBenefitsYesBtn.isSelected())) {
      await browser.pause(4000);
      await this.socialBenefitsYesBtn.click(); // Assuming we need to turn it ON
    }

    await this.maritalStatus.waitForClickable();
    await this.maritalStatus.click();

    await elementUtil.fillField(this.socialSecurityOverrideField, "4000");
  }

  async fillDefaultCalculatorValues() {
    //Fill Default Calculator values

    await this.adjustDefValBtn.click();
    await browser.pause(2000);
    await elementUtil.fillField(this.additionalIncomeField, "500");
    await elementUtil.fillField(this.retirementDurationField, "20");

    if (!(await this.inflationRadio.isSelected())) {
      await browser.pause(2000);
      await this.inflationRadio.click(); // Assuming we need to turn it ON
    }

    await browser.pause(2000);
    await elementUtil.fillField(this.inflationRateField, "9");
    await elementUtil.fillField(this.retirementAnnualIncomeField, "75");

    await elementUtil.fillField(this.preRetirementRoiField, "8");

    await elementUtil.fillField(this.postRetirementRoiField, "5");

    await elementUtil.doClick(this.saveChangesBtn);
    
  }

  clickOnCalculateButton = async () => {
    //Click on the Calculate button
    await browser.pause(2000);
    await elementUtil.doClick(this.calculateBtn);
  };
}

module.exports = new RetirementSavingsCalculatorPage();
