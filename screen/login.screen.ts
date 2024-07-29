import { BasePage } from "./baseScreen.ts";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

let platform = argv["platform"];

export class BaseAppElement {
  public static Element(locator: string) {
    return new BasePage(locator);
  }
}
/*
Store all elements for Android and iOS 
Variable name ending with APK is for Android and IPK for iOS
*/
const SELECTORS: any = {
  loginScreenMenuBtnAPK:
    '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
  loginScreenMenuBtnIPA: `//XCUIElementTypeButton[@name="tab bar option menu"]`,
  loginBtnAPK: '//android.view.ViewGroup[@content-desc="menu item log in"]',
  loginBtnIPA: `//XCUIElementTypeOther[@name="menu item log in"]`,
  usernameInputFieldAPK:
    '//android.widget.EditText[@content-desc="Username input field"]',
  usernameInputFieldIPA: `//XCUIElementTypeTextField[@name="Username input field"]`,
  passwordInputFieldAPK:
    '//android.widget.EditText[@content-desc="Password input field"]',
  passwordInputFieldIPA: `//XCUIElementTypeSecureTextField[@name="Password input field"]`,
  loginBtn1APK: '//android.view.ViewGroup[@content-desc="Login button"]',
  loginBtn1IPA: `//XCUIElementTypeOther[@name="Login button"]`,
  homeScreenHeaderAPK:
    '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
  homeScreenHeaderIPA: `//XCUIElementTypeStaticText[@name="Products"]`,
  errorMsgWrongusrAPK: `//android.widget.TextView[@text="Provided credentials do not match any user in this service."]`,
  errorMsgWrongusrIPA: `//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]`,
  errorMsgLockUsrAPK:
    '//android.widget.TextView[@text="Sorry, this user has been locked out."]',
  errorMsgLockUsrIPA:
    '//XCUIElementTypeStaticText[@name="Sorry, this user has been locked out."]',
  errorMsgBlankUsrAPK:
    '//android.widget.TextView[@text="Username is required"]',
  errorMsgBlankUsrIPA:
    '//XCUIElementTypeStaticText[@name="Username is required"]',
  errorMsgBlankPassAPK:
    '//android.widget.TextView[@text="Password is required"]',
  errorMsgBlankPassIPA:
    '//XCUIElementTypeStaticText[@name="Password is required"]',
};

/* 
Create method to call while executing test cases which is common for Android and iOS
It will check the platform while executing
*/
export class LoginScreen extends BaseAppElement {
  static loginScreenMenuBtn() {
    return this.Element(SELECTORS[`loginScreenMenuBtn${platform}`]);
  }
  static loginBtn() {
    return this.Element(SELECTORS[`loginBtn${platform}`]);
  }
  static usernameInputField() {
    return this.Element(SELECTORS[`usernameInputField${platform}`]);
  }
  static passwordInputField() {
    return this.Element(SELECTORS[`passwordInputField${platform}`]);
  }
  static loginBtn1() {
    return this.Element(SELECTORS[`loginBtn1${platform}`]);
  }
  static homeScreenHeader() {
    return this.Element(SELECTORS[`homeScreenHeader${platform}`]);
  }
  static errorMsgWrongusr() {
    return this.Element(SELECTORS[`errorMsgWrongusr${platform}`]);
  }
  static errorMsgLockUsr() {
    return this.Element(SELECTORS[`errorMsgLockUsr${platform}`]);
  }
  static errorMsgBlankUsr() {
    return this.Element(SELECTORS[`errorMsgBlankUsr${platform}`]);
  }
  static errorMsgBlankPass() {
    return this.Element(SELECTORS[`errorMsgBlankPass${platform}`]);
  }

  /*
    Validate Login screen is display or not 
    */
  static async validateLoginScreen() {
    await this.loginScreenMenuBtn().waitForDisplayed();
    return await this.loginScreenMenuBtn().isDisplayed();
  }
  /*
    Method to navigate Login page and Enter Username and credentilas
    */
  static async loginWithValidCredentials(userName: string, password: string) {
    await this.loginScreenMenuBtn().click();
    await this.loginBtn().waitForDisplayed();
    await this.loginBtn().click();
    await this.usernameInputField().waitForDisplayed();
    await driver.pause(5000);
    await this.usernameInputField().addValue(userName);
    await this.passwordInputField().addValue(password);
    await this.loginBtn1().waitForEnabled();
    await this.loginBtn1().click();
    await this.homeScreenHeader().waitForDisplayed();
  }
  /*
    Method To get Error message when user pass Invalid Credentilas
    */
  static async loginWithInvalidCredentials(userName: string, password: string) {
    await this.loginScreenMenuBtn().click();
    await this.loginBtn().waitForDisplayed();
    await this.loginBtn().click();
    await this.usernameInputField().waitForDisplayed();
    await driver.pause(5000);
    await this.usernameInputField().addValue(userName);
    await this.passwordInputField().addValue(password);
    await this.loginBtn1().waitForEnabled();
    await this.loginBtn1().click();
    await this.errorMsgWrongusr().waitForDisplayed();
  }
  /*
     Method to get Lock User Error Message 
     */
  static async loginWithLockCredentials(userName: string, password: string) {
    await this.loginScreenMenuBtn().click();
    await this.loginBtn().waitForDisplayed();
    await this.loginBtn().click();
    await this.usernameInputField().waitForDisplayed();
    await driver.pause(5000);
    await this.usernameInputField().addValue(userName);
    await this.passwordInputField().addValue(password);
    await this.loginBtn1().waitForEnabled();
    await this.loginBtn1().click();
    await this.errorMsgLockUsr().waitForDisplayed();
  }
  /*
    Method to get Blank Username Error Message
    */
  static async loginWithBlankUsername(userName: string, password: string) {
    await this.loginScreenMenuBtn().click();
    await this.loginBtn().waitForDisplayed();
    await this.loginBtn().click();
    await this.usernameInputField().waitForDisplayed();
    await driver.pause(5000);
    await this.usernameInputField().addValue(userName);
    await this.passwordInputField().addValue(password);
    await this.loginBtn1().waitForEnabled();
    await this.loginBtn1().click();
    await this.errorMsgBlankUsr().waitForDisplayed();
  }
  /*
    Method to get Blank Password Error Message
    */
  static async loginWithBlankPassword(userName: string, password: string) {
    await this.loginScreenMenuBtn().click();
    await this.loginBtn().waitForDisplayed();
    await this.loginBtn().click();
    await this.usernameInputField().waitForDisplayed();
    await driver.pause(5000);
    await this.usernameInputField().addValue(userName);
    await this.passwordInputField().addValue(password);
    await this.loginBtn1().waitForEnabled();
    await this.loginBtn1().click();
    await this.errorMsgBlankPass().waitForDisplayed();
  }

  /*
     Validate Login successful Message
     */
  static async validateUserLoggedInSuccessfully() {
    await this.homeScreenHeader().waitForDisplayed();
    return await this.homeScreenHeader().getVisibleText();
  }
  /*
    Validate Error Message when usr pass wrong username and Password
    */
  static async validateErrorMessage() {
    await this.errorMsgWrongusr().waitForDisplayed();
    return await this.errorMsgWrongusr().getVisibleText();
  }
  /*
    Validate Lock user error message
    */
  static async validateLockUserErrorMsg() {
    await this.errorMsgLockUsr().waitForDisplayed();
    return await this.errorMsgLockUsr().getVisibleText();
  }
  /*
    Validate error message when pass blank username
    */
  static async validateBlankUsrMsg() {
    await this.errorMsgBlankUsr().waitForDisplayed();
    return await this.errorMsgBlankUsr().getVisibleText();
  }
  /*
    Validate error message when pass blank password
    */
  static async validateBlankPassMsg() {
    await this.errorMsgBlankPass().waitForDisplayed();
    return await this.errorMsgBlankPass().getVisibleText();
  }
}
