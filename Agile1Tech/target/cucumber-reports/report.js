$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mercuryregistration.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "Mercury Registration",
  "description": "",
  "id": "mercury-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters First Name \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Phone Number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter Email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter State \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Zip Code \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters User Name \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "address",
        "city",
        "state",
        "zipCode",
        "userName",
        "password",
        "confirmPassword"
      ],
      "line": 21,
      "id": "mercury-registration;fill-up-the-mercury-registration-page;;1"
    },
    {
      "cells": [
        "Steve",
        "Jobs",
        "1234567890",
        "sj@aol.com",
        "123 Main St",
        "Troy",
        "MI",
        "48085",
        "sj091234",
        "Sjobs@123",
        "Sjobs@123"
      ],
      "line": 22,
      "id": "mercury-registration;fill-up-the-mercury-registration-page;;2"
    },
    {
      "cells": [
        "Mustang",
        "Jones",
        "7234567890",
        "mj@aol.com",
        "1321 Main St",
        "Troy",
        "MI",
        "48085",
        "sj091234",
        "Sjobs@154",
        "Sjobs@154"
      ],
      "line": 23,
      "id": "mercury-registration;fill-up-the-mercury-registration-page;;3"
    },
    {
      "cells": [
        "Mandy",
        "Moore",
        "1237667890",
        "mm@aol.com",
        "12335 Main St",
        "Troy",
        "MI",
        "48085",
        "sj091744",
        "Sjobs@150",
        "Sjobs@150"
      ],
      "line": 24,
      "id": "mercury-registration;fill-up-the-mercury-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters First Name \"Steve\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Last Name \"Jobs\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter Email address \"sj@aol.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Address \"123 Main St\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters City \"Troy\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter State \"MI\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters User Name \"sj091234\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 11526811900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve",
      "offset": 24
    }
  ],
  "location": "mercuryTours_step.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 208130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jobs",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 150203300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 155078900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sj@aol.com",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 160833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123 Main St",
      "offset": 21
    }
  ],
  "location": "mercuryTours_step.user_enters_Address(String)"
});
formatter.result({
  "duration": 163290200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Troy",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enters_City(String)"
});
formatter.result({
  "duration": 104795800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MI",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enter_State(String)"
});
formatter.result({
  "duration": 99129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 110424800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sj091234",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 144224500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Password(String)"
});
formatter.result({
  "duration": 158964800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 30
    }
  ],
  "location": "mercuryTours_step.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 149588300,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 87985400,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_close_the_browser()"
});
formatter.result({
  "duration": 669703500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters First Name \"Mustang\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Last Name \"Jones\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter Email address \"mj@aol.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Address \"1321 Main St\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters City \"Troy\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter State \"MI\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters User Name \"sj091234\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 10820781300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustang",
      "offset": 24
    }
  ],
  "location": "mercuryTours_step.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 139959500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jones",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 100922000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7234567890",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 133899500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mj@aol.com",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 103716100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1321 Main St",
      "offset": 21
    }
  ],
  "location": "mercuryTours_step.user_enters_Address(String)"
});
formatter.result({
  "duration": 111665600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Troy",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enters_City(String)"
});
formatter.result({
  "duration": 84452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MI",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enter_State(String)"
});
formatter.result({
  "duration": 63015200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 74564600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sj091234",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 170737800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Password(String)"
});
formatter.result({
  "duration": 78697800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 30
    }
  ],
  "location": "mercuryTours_step.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 99729800,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 67605500,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_close_the_browser()"
});
formatter.result({
  "duration": 627706200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters First Name \"Mandy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Last Name \"Moore\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Phone Number \"1237667890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter Email address \"mm@aol.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Address \"12335 Main St\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters City \"Troy\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter State \"MI\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters User Name \"sj091744\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Password \"Sjobs@150\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Confirm Password \"Sjobs@150\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 10789009800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mandy",
      "offset": 24
    }
  ],
  "location": "mercuryTours_step.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 108615600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moore",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 86778500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1237667890",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 95411800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mm@aol.com",
      "offset": 26
    }
  ],
  "location": "mercuryTours_step.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 118134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12335 Main St",
      "offset": 21
    }
  ],
  "location": "mercuryTours_step.user_enters_Address(String)"
});
formatter.result({
  "duration": 144197000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Troy",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enters_City(String)"
});
formatter.result({
  "duration": 94346000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MI",
      "offset": 18
    }
  ],
  "location": "mercuryTours_step.user_enter_State(String)"
});
formatter.result({
  "duration": 94243900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 112116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sj091744",
      "offset": 23
    }
  ],
  "location": "mercuryTours_step.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 119451800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 22
    }
  ],
  "location": "mercuryTours_step.user_enters_Password(String)"
});
formatter.result({
  "duration": 98513100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 30
    }
  ],
  "location": "mercuryTours_step.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 135492700,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 59659500,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_close_the_browser()"
});
formatter.result({
  "duration": 658743700,
  "status": "passed"
});
formatter.uri("mercurytours.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "Testing Mercury Page Links",
  "description": "",
  "id": "testing-mercury-page-links",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Click on links on home page",
  "description": "",
  "id": "testing-mercury-page-links;click-on-links-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on the home link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user will validate the title of the Home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will click on Flights link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user will validate the title of the Flights page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user will click on the Hotels link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user will validate the title of the Hotels page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user will click on the Car Rentals link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will validate the title of the Car Rentals page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user will click on Cruises link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user will validate the title of the Cruises page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user will click on the Destinations link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user will validate the title of the Destinations page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user will click on the Vacations link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user will validate the title of the Vacations page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user will go back to home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 10879152200,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_clicks_on_the_home_link()"
});
formatter.result({
  "duration": 732913100,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_home_page()"
});
formatter.result({
  "duration": 9979600,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 375972500,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_Flights_link()"
});
formatter.result({
  "duration": 598010300,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Flights_page()"
});
formatter.result({
  "duration": 12109600,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 306219800,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_the_Hotels_link()"
});
formatter.result({
  "duration": 382804300,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Hotels_page()"
});
formatter.result({
  "duration": 10675600,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 301460000,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_the_Car_Rentals_link()"
});
formatter.result({
  "duration": 384808300,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Car_Rentals_page()"
});
formatter.result({
  "duration": 10787900,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 364417800,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_Cruises_link()"
});
formatter.result({
  "duration": 481479500,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Cruises_page()"
});
formatter.result({
  "duration": 8610000,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 313416900,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_the_Destinations_link()"
});
formatter.result({
  "duration": 395758400,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Destinations_page()"
});
formatter.result({
  "duration": 10065500,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 298611900,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_click_on_the_Vacations_link()"
});
formatter.result({
  "duration": 363896200,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_validate_the_title_of_the_Vacations_page()"
});
formatter.result({
  "duration": 8494200,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_will_go_back_to_home_page()"
});
formatter.result({
  "duration": 288602300,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_close_the_browser()"
});
formatter.result({
  "duration": 649800700,
  "status": "passed"
});
});