// wdio.conf.js
import SlackReporter from "@moroo/wdio-slack-reporter";
import type { Options } from "@wdio/types";
export const config: Options.Testrunner = {
  runner: "local",

  specs: ["../features/myDemo.feature"],
  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:automationName": "uiautomator2",
      "appium:udid": "emulator-5554",
      "appium:platformVersion": "10.0",
      "appium:app": "./app/Android-MyDemoAppRN.1.3.0.build-244.apk",
      "appium:waitForIdleTimeout": 3000,
    },
  ],

  logLevel: "info",
  services: ["appium"],
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
      },
    ],
  ],
  bail: 0,
  baseUrl: "http://localhost",
  path: "/",
  connectionRetryCount: 3,
  port: 4723,
  framework: "cucumber",
  cucumberOpts: {
    require: ["./step_definitions/*.ts"],
    timeout: 120000,
  },
  afterScenario: async function (world, result, context) {
    await driver.pause(5000);
    await driver.reloadSession();
    },

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },
};
