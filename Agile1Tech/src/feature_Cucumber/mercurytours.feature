#Author: your.email@your.domain.com
Feature: Testing Mercury Page Links

  Scenario: Click on links on home page
    Given user is in the home page
    When user clicks on the home link
    And user will validate the title of the Home page
    And user will go back to home page
    And user will click on Flights link
    And user will validate the title of the Flights page
    And user will go back to home page
    And user will click on the Hotels link
    And user will validate the title of the Hotels page
    And user will go back to home page
    And user will click on the Car Rentals link
    And user will validate the title of the Car Rentals page
    And user will go back to home page
    And user will click on Cruises link
    And user will validate the title of the Cruises page
    And user will go back to home page
    And user will click on the Destinations link
    And user will validate the title of the Destinations page
    And user will go back to home page
    And user will click on the Vacations link
    And user will validate the title of the Vacations page
    And user will go back to home page
    Then user close the browser
