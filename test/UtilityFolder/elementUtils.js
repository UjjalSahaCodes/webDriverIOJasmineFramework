class ElementUtil {
  // WDIO click method
  doClick = async (element) => {
    await element.waitForClickable(
      10000,
      true,
      "Timeout Message: Element is not displayed in the visible port",
      2000
    );
    await element.click();
  };

  // WDIO set input value method
  doSetValue = async (element, value) => {
    await element.waitForDisplayed(
      element,
      10000,
      "Timeout Message: Text field Element is not displayed in the visible port",
      2000
    );
    await element.setValue(value);
  };

  async fillField(element, value) {
    
    await this.doClick(element);
    
    await browser.pause(1000);
    await this.doSetValue(element,value);
    
  }

  doWaitForExist = async (element) => {
    return await element.waitForExist({ timeout: 10000 });
  };
}

module.exports = new ElementUtil();
