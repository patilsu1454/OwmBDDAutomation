Feature: Login to OpenWeatherMap feature

Scenario: Login to OpenWeatherMap Scenario
Given User is on Login Page
When User verifies title of Login Page
Then Verify required labels are displayed

Scenario: For invalid city weather should not be found in OpenWeatherMap
Given User is on Login Page
When User verifies title of Login Page
And User enters city name in weather search "BangaloreInValid" 
Then Verifies that website suggests city is Not found

Scenario: For valid city weather information should be displayed in OpenWeatherMap
Given User is on Login Page
When User verifies title of Login Page
And User enters city name in weather search "Bangalore" 
Then Verifies that website suggests given city weather information

Scenario Outline: Test to verify Multiple valid cities weather info
Given User is on Login Page
When User verifies title of Login Page
And User enters cities name "<cityName>" with "<serialNumber>" in weather search 
Then Verifies that website suggests given city weather information
Examples:
| cityName | serialNumber |
| Delhi | FirstCity |
|Chennai| SecondCity |
|Mumbai| ThirdCity |