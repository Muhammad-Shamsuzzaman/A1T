Feature: NewTours Registration

  Scenario Outline: Register in the the newTours Registration page
    Given user is in the home page
    When user enters First Name "<firstName>"
    And user enters Last Name "<lastName>"
    And user enters Phone Number "<phoneNumber>"
    And user enter Email address "<email>"
    And user enters Address "<address>"
    And user enters City "<city>"
    And user enter State "<state>"
    And user enters Zip Code "<zipCode>"
    And user will select country "<country>"
    And user enters User Name "<userName>"
    And user enters Password "<password>"
    And user enters Confirm Password "<confirmPassword>"
    And user validates the submit button
    Then user close the browser

    Examples: 
      | firstName | lastName | phoneNumber | email       | address        | city      | state | zipCode | country       | userName | password  | confirmPassword |
      | Debra     | Burks    |  1234567890 | D@yahoo.com | 9273 Lee St.   | Fairpoint | MA    |   48085 | UNITED STATES | Deb1234  | Sjobs@123 | Sjobs@123       |
      | jacquilin | Duncan   |  7234567890 | j@yahoo.com | 1321 Thomas Dr | Fairpoint | MA    |   48085 | CANADA        | Sjobs154 | Sjobs@154 | Sjobs@154       |
      | Pamella   | Newman   |  1237667890 | p@yahoo.com | 12335 Main Rd  | Fairpoint | MA    |   48085 | BANGLADESH    | Pam1234  | Sjobs@150 | Sjobs@150       |
