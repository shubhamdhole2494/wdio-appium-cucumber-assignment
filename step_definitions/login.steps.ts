import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import testData from "../support/testdata.json" assert { type: "json" };
import { LoginScreen } from "../screen/login.screen.ts";

Given(/^I am on the login screen$/, async () => {
  let isLoginScreenDisplayed = await LoginScreen.validateLoginScreen();
  expect(isLoginScreenDisplayed).to.be.true;
});
When(/^I enter valid login credentails$/, async () => {
  await LoginScreen.loginWithValidCredentials(
    testData.loginCreds.username,
    testData.loginCreds.password
  );
});
Then(/^I should login successfully$/, async () => {
  let homeScreenHeaderText =
    await LoginScreen.validateUserLoggedInSuccessfully();
  expect(homeScreenHeaderText).to.be.equal("Products");
  
});
When(/^I enter invalid username and valid password$/, async () => {
  await LoginScreen.loginWithInvalidCredentials(
    testData.invalidUsername.username,
    testData.invalidUsername.password
  );
});
Then(/^I should get error message$/, async () => {
  let errorMsgWrongusrText = await LoginScreen.validateErrorMessage();
  expect(errorMsgWrongusrText).to.be.equal(
    "Provided credentials do not match any user in this service."
  );

});
When(/^I enter lock user credentials$/, async () => {
  await LoginScreen.loginWithLockCredentials(
    testData.lockUsername.username,
    testData.lockUsername.password
  );
});
Then(/^I should get lock error message$/, async () => {
  let errorMsgLockUsrText = await LoginScreen.validateLockUserErrorMsg();
  expect(errorMsgLockUsrText).to.be.equal(
    "Sorry, this user has been locked out."
  );
  
});
When(/^I enter blank username$/, async () => {
  await LoginScreen.loginWithBlankUsername(
    testData.blankUsername.username,
    testData.blankUsername.password
  );
});
Then(/^I should get required username error$/, async () => {
  let errorMsgBlankUsrText = await LoginScreen.validateBlankUsrMsg();
  expect(errorMsgBlankUsrText).to.be.equal("Username is required");
  
});
When(/^I enter blank password$/, async () => {
  await LoginScreen.loginWithBlankPassword(
    testData.blankPassword.username,
    testData.blankPassword.password
  );
});
Then(/^I should get required password error$/, async () => {
  let errorMsgBlankPassText = await LoginScreen.validateBlankPassMsg();
  expect(errorMsgBlankPassText).to.be.equal("Password is required");
});
