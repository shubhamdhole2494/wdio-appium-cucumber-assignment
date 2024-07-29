Feature: Login Functionality Of My demo app

  Scenario: Verify Error message When enter wrong emailID
    Given I am on the login screen
    When I enter invalid username and valid password
    Then I should get error message

  Scenario: Verify Error message for locked user
    Given I am on the login screen
    When I enter lock user credentials
    Then I should get lock error message

  Scenario: Verify Error message when user pass blank username
    Given I am on the login screen
    When I enter blank username
    Then I should get required username error

  Scenario: Verify Error message when user pass blank password
    Given I am on the login screen
    When I enter blank password
    Then I should get required password error

  Scenario: Validate Login Functionality of my demo app
    Given I am on the login screen
    When I enter valid login credentails
    Then I should login successfully
