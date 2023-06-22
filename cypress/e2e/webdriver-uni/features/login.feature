Feature: WebdriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click the login button
        Then I should be presented with the following message validation succeeded