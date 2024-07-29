import type { Options } from "@wdio/types";
export const config: Options.Testrunner = {
  runner: "local",

  specs: ["../features/myDemo.feature"],
  maxInstances: 1,

  capabilities: [
    {
      "appium:platformName": "iOS",
      "appium:automationName": "XCUITest",
      "appium:deviceName": "iPhone 15",
      "appium:platformVersion": "17.2",
      "appium:udid": "25EC4E49-18FC-4492-8090-1449E7F927C2",
      "appium:orientation": "PORTRAIT",
      "appium:app": "./app/MyRNDemoApp 2.app",
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
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
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
    timeout: 60000,
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
