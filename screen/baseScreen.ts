import { $ } from "@wdio/globals";
export class BasePage {
  private uiElement;
  private locator: string;
  ELEMENT: any;
  constructor(locator: string) {
    this.locator = locator;
    this.uiElement = $(locator);
  }
  /* 
    Common used methods which required methos 
    */
  async click() {
    await (await this.uiElement).click();
  }
  async addValue(keys: string | number) {
    await (await this.uiElement).addValue(keys);
  }

  async getAttribute(attribute: string) {
    return await (await this.uiElement).getAttribute(attribute);
  }

  async getVisibleText() {
    return await (await this.uiElement).getText();
  }

  async waitForDisplayed() {
    return await (await this.uiElement).waitForDisplayed({ timeout: 120000 });
  }
  async waitForEnabled() {
    return await (await this.uiElement).waitForEnabled();
  }
  async isEnabled() {
    return await (await this.uiElement).isEnabled();
  }
  async isDisplayed() {
    return await (await this.uiElement).isDisplayed();
  }
  async clearValue() {
    return await (await this.uiElement).clearValue();
  }
  async selectValueByText(text: string) {
    return await (await this.uiElement).selectByVisibleText(text);
  }
  async tapAction(xCoordinate: number, yCoordinate: number) {
    return await driver.touchAction({
      action: "tap",
      x: xCoordinate,
      y: yCoordinate,
    });
  }
  async swipeLeft(
    xCoordinateFrom: number,
    yCoordinateFrom: number,
    xCoordinateTo: number,
    yCoordinateTo: number
  ) {
    return await driver.touchPerform([
      { action: "press", options: { x: xCoordinateFrom, y: yCoordinateFrom } },
      { action: "wait", options: { ms: 3000 } },
      { action: "moveTo", options: { x: xCoordinateTo, y: yCoordinateTo } },
      { action: "release" },
    ]);
  }
}
