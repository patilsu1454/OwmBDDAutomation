$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to OpenWeatherMap feature",
  "description": "",
  "id": "login-to-openweathermap-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to OpenWeatherMap Scenario",
  "description": "",
  "id": "login-to-openweathermap-feature;login-to-openweathermap-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify required labels are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 9160904276,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 13194192,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.requiredLabelVerified()"
});
formatter.result({
  "duration": 147520538,
  "status": "passed"
});
formatter.after({
  "duration": 2322822358,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "For invalid city weather should not be found in OpenWeatherMap",
  "description": "",
  "id": "login-to-openweathermap-feature;for-invalid-city-weather-should-not-be-found-in-openweathermap",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters city name in weather search \"BangaloreInValid\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verifies that website suggests city is Not found",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 8219404796,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 23209152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BangaloreInValid",
      "offset": 41
    }
  ],
  "location": "LoginSteps.enterCityNameToSearch(String)"
});
formatter.result({
  "duration": 3271119429,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.invalidCityMsg()"
});
formatter.result({
  "duration": 108250976,
  "status": "passed"
});
formatter.after({
  "duration": 2322023019,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "For valid city weather information should be displayed in OpenWeatherMap",
  "description": "",
  "id": "login-to-openweathermap-feature;for-valid-city-weather-information-should-be-displayed-in-openweathermap",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters city name in weather search \"Bangalore\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verifies that website suggests given city weather information",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 8005744896,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 6190441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 41
    }
  ],
  "location": "LoginSteps.enterCityNameToSearch(String)"
});
formatter.result({
  "duration": 3098776335,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validCitySearch()"
});
formatter.result({
  "duration": 107529042,
  "status": "passed"
});
formatter.after({
  "duration": 2321140612,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Test to verify Multiple valid cities weather info",
  "description": "",
  "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters cities name \"\u003ccityName\u003e\" with \"\u003cserialNumber\u003e\" in weather search",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verifies that website suggests given city weather information",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;",
  "rows": [
    {
      "cells": [
        "cityName",
        "serialNumber"
      ],
      "line": 26,
      "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;1"
    },
    {
      "cells": [
        "Delhi",
        "FirstCity"
      ],
      "line": 27,
      "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;2"
    },
    {
      "cells": [
        "Chennai",
        "SecondCity"
      ],
      "line": 28,
      "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;3"
    },
    {
      "cells": [
        "Mumbai",
        "ThirdCity"
      ],
      "line": 29,
      "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Test to verify Multiple valid cities weather info",
  "description": "",
  "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters cities name \"Delhi\" with \"FirstCity\" in weather search",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verifies that website suggests given city weather information",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 10212544904,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 19963843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 25
    },
    {
      "val": "FirstCity",
      "offset": 38
    }
  ],
  "location": "LoginSteps.user_enters_cities_name_with_in_weather_search(String,String)"
});
formatter.result({
  "duration": 3778229658,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validCitySearch()"
});
formatter.result({
  "duration": 113908274,
  "status": "passed"
});
formatter.after({
  "duration": 2117852863,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test to verify Multiple valid cities weather info",
  "description": "",
  "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters cities name \"Chennai\" with \"SecondCity\" in weather search",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verifies that website suggests given city weather information",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 8149836243,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 14485142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 25
    },
    {
      "val": "SecondCity",
      "offset": 40
    }
  ],
  "location": "LoginSteps.user_enters_cities_name_with_in_weather_search(String,String)"
});
formatter.result({
  "duration": 3644138167,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validCitySearch()"
});
formatter.result({
  "duration": 147715748,
  "status": "passed"
});
formatter.after({
  "duration": 2325272104,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Test to verify Multiple valid cities weather info",
  "description": "",
  "id": "login-to-openweathermap-feature;test-to-verify-multiple-valid-cities-weather-info;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User verifies title of Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters cities name \"Mumbai\" with \"ThirdCity\" in weather search",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verifies that website suggests given city weather information",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userNavigateToLoginPage()"
});
formatter.result({
  "duration": 8657448277,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyPageTitle()"
});
formatter.result({
  "duration": 11588340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 25
    },
    {
      "val": "ThirdCity",
      "offset": 39
    }
  ],
  "location": "LoginSteps.user_enters_cities_name_with_in_weather_search(String,String)"
});
formatter.result({
  "duration": 3827099974,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.validCitySearch()"
});
formatter.result({
  "duration": 114492013,
  "status": "passed"
});
formatter.after({
  "duration": 2320026371,
  "status": "passed"
});
});