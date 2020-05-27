Feature: ActiTIME login feature

#Data drivingwithout examples keyword

#Scenario: ActiTIME login Test scenario
#
#Given user is already on Login Page
#When title of login page is actiTIME Login
#Then user enters "admin" and user enters "manager"
#Then user clicks on login button
#Then user is on home page

#Data driving using examples keyword

Scenario Outline: ActiTIME login Test scenario

Given user is already on Login Page
When title of login page is actiTIME Login
Then user enters "<username>" and user enters "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
  | username | password |
  | admin    | manager  |
  | admin    | manager1 |

