### Project Title

**Mobile Automation Testing with Cucumber, Page Object Model, and Allure Reports**

### Description

This project is a comprehensive framework for automating mobile application testing using Cucumber for behavior-driven development (BDD), the Page Object Model (POM) design pattern, and Allure Reports for detailed test reporting. It aims to provide a robust and maintainable structure for writing test scenarios in a human-readable format, facilitating collaboration between developers, testers, and non-technical stakeholders. The integration of Allure Reports ensures clear, concise, and informative test reports to help analyze test results effectively.

This title and description should provide a clear and concise overview of your project and its components.

### Getting Started

#### Pre-requisites

1. NodeJS installed globally in the system. [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. JAVA (jdk) installed in the system. 
3. Andriod (sdk) installed in the system. 
4. Set JAVA_HOME & ANDROID_HOME paths correctly in the system. 
5. Chrome browser installed.
6. Text Editor/IDE (Optional) installed--›Sublime/Visual Studio Code/Brackets.

Tip : Install `npm install -g appium-doctor` and run it from the command-line which checks, if your java jdk and android sdk paths are set correctly or not.

### Installation and Setup 
1. Clone the repository into a folder
2. Go inside the folder and run following command from terminal/command Command to install node modules: npm install
3. All the dependencies from package. json and typescript typings would be installed in node_modules folder.

### Command To Run Test

1. To run local android test : "npm run android:test"
2. To run local ios test: " npm run ios:test"
3. To run local ios test: " npm run report"

### Tech stack :

1. Appium - This is the node server which interacts with the mobile devices.

2. WebdriverIO - It is the selenium webdriver api bindings for node.js, It has a very simple api which could be used to automate web & browser apps in a fast and scalable way.

3. Typescript (Javascript) - It is the superset of javascript which has additional static typings and features like JAVA and other languaes. Now you could write your code which compiles to pure javascript.

4. Mocha: Mocha.js is a feature-rich JavaScript test framework that is widely used for testing JavaScript codes. It can run on both Node. js and in the browser, making it a versatile.

### Folder Structure

##### Config folder
This folder consists of webdriverio configuration file which holds capabilities like spec file path, framework options, reporter and all hooks used in the framework.
##### node_modules
This folder consists of all supported code required for npm packges utilized into the project.
##### ScreenObjects
Here we have all the screen objects and action methods through which we use to perform automation tests.

##### ScreenPage
Here we have all the common action methods used in framework like click, addValue so that we can custom name our action methods and use its parameters as per our requirement.
##### features
Here we will have all gerkin based scenarios.
##### step-definitions
Here we have all cucumber related step definitions.
##### testData
here we have stored all the test data which we have utilized in the framework.
##### utils
This is folder where we store all the common utility methods for all API actions and DB queries.
apiCalls.ts file contains all common action methods we use to perform API actions like GET,POST,Delete.

##### allure results
This is folder where all the test results will be stored once test execution is done, basically it shows how many number of tests passed/failed
##### allure-report
This is folder where we generate user readble test report on UI using this command "allure generate --clean allure-results && allure open".
##### Package.json
This is file where we write all the packages required for our test automation project.
##### jsconfig.json
This file consists of all auto compilation options required for this project.
##### .gitigonore
This file consists of all names of files and folder which we will not be committing to github.

