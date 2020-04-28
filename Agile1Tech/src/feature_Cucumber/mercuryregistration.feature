#Author: your.email@your.domain.com
Feature: Mercury Registration

  Scenario Outline: Fill up the Mercury Registration Page
    Given user enters the browser name "<browserName>"
    When user is in the home page
    And user enters First Name "<firstName>"
    And user enters Last Name "<lastName>"
    And user enters Phone Number "<phoneNumber>"
    And user enter Email address "<email>"
    And user enters Address "<address>"
    And user enters City "<city>"
    And user enter State "<state>"
    And user enters Zip Code "<zipCode>"
    And user enters User Name "<userName>"
    And user enters Password "<password>"
    And user enters Confirm Password "<confirmPassword>"
    And user validates the submit button
    Then user close the browser

    Examples: 
      | firstName | lastName | phoneNumber | email      | address       | city | state | zipCode | userName | password  | confirmPassword | browserName |
      | Steve     | Jobs     |  1234567890 | sj@aol.com | 123 Main St   | Troy | MI    |   48085 | sj091234 | Sjobs@123 | Sjobs@123       | chrome      |
      | Mustang   | Jones    |  7234567890 | mj@aol.com | 1321 Main St  | Troy | MI    |   48085 | sj091234 | Sjobs@154 | Sjobs@154       | chrome      |
      | Mandy     | Moore    |  1237667890 | mm@aol.com | 12335 Main St | Troy | MI    |   48085 | sj091744 | Sjobs@150 | Sjobs@150       | chrome      |

    Examples: 
      | firstName | lastName | phoneNumber | email      | address       | city | state | zipCode | userName | password  | confirmPassword | browserName |
      | Steve     | Jobs     |  1234567890 | sj@aol.com | 123 Main St   | Troy | MI    |   48085 | sj091234 | Sjobs@123 | Sjobs@123       | firefox     |
      | Mustang   | Jones    |  7234567890 | mj@aol.com | 1321 Main St  | Troy | MI    |   48085 | sj091234 | Sjobs@154 | Sjobs@154       | firefox     |
      | Mandy     | Moore    |  1237667890 | mm@aol.com | 12335 Main St | Troy | MI    |   48085 | sj091744 | Sjobs@150 | Sjobs@150       | firefox     |

    Examples: 
      | firstName | lastName | phoneNumber | email      | address       | city | state | zipCode | userName | password  | confirmPassword | browserName      |
      | Steve     | Jobs     |  1234567890 | sj@aol.com | 123 Main St   | Troy | MI    |   48085 | sj091234 | Sjobs@123 | Sjobs@123       | InternetExplorer |
      | Mustang   | Jones    |  7234567890 | mj@aol.com | 1321 Main St  | Troy | MI    |   48085 | sj091234 | Sjobs@154 | Sjobs@154       | InternetExplorer |
      | Mandy     | Moore    |  1237667890 | mm@aol.com | 12335 Main St | Troy | MI    |   48085 | sj091744 | Sjobs@150 | Sjobs@150       | InternetExplorer |
