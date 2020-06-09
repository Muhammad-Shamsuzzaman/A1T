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
  "name": "user enters the browser name \"\u003cbrowserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters Phone Number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter Email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter State \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters Zip Code \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters User Name \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters Confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
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
        "confirmPassword",
        "browserName"
      ],
      "line": 22,
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
        "Sjobs@123",
        "chrome"
      ],
      "line": 23,
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
        "Sjobs@154",
        "chrome"
      ],
      "line": 24,
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
        "Sjobs@150",
        "chrome"
      ],
      "line": 25,
      "id": "mercury-registration;fill-up-the-mercury-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user enters the browser name \"chrome\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters First Name \"Steve\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Last Name \"Jobs\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter Email address \"sj@aol.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Address \"123 Main St\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters City \"Troy\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter State \"MI\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters User Name \"sj091234\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "mercuryTours_step.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 4405444400,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 4294236600,
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
  "duration": 177081500,
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
  "duration": 126647300,
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
  "duration": 169923300,
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
  "duration": 180883900,
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
  "duration": 171086300,
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
  "duration": 138557600,
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
  "duration": 114801200,
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
  "duration": 139635700,
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
  "duration": 168685100,
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
  "duration": 176414600,
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
  "duration": 166861400,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 191490700,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_close_the_browser()"
});
formatter.result({
  "duration": 685403500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fill up the Mercury Registration Page",
  "description": "",
  "id": "mercury-registration;fill-up-the-mercury-registration-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user enters the browser name \"chrome\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters First Name \"Mustang\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Last Name \"Jones\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter Email address \"mj@aol.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Address \"1321 Main St\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters City \"Troy\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter State \"MI\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters User Name \"sj091234\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "mercuryTours_step.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 3185658900,
  "status": "passed"
});
formatter.match({
  "location": "mercuryTours_step.user_is_in_the_home_page()"
});
