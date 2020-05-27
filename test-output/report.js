$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Akhil\u0027s/ActiTIMEBddFramework/src/main/java/features/tasks.feature");
formatter.feature({
  "line": 1,
  "name": "ActiTIME tasks feature",
  "description": "",
  "id": "actitime-tasks-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "ActiTIME create tasks Test scenario",
  "description": "",
  "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is actiTIME Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on new Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select customer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters task details \"\u003ccustomername\u003e\" and \"\u003cprojectname\u003e\" and \"\u003ctaskname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on create tasks button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "customername",
        "projectname",
        "taskname"
      ],
      "line": 17,
      "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "manager",
        "akhil",
        "snapchat",
        "focus on studies"
      ],
      "line": 18,
      "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;2"
    },
    {
      "cells": [
        "admin",
        "manager",
        "krishna",
        "whatsapp",
        "focus on studies"
      ],
      "line": 19,
      "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;3"
    },
    {
      "cells": [
        "admin",
        "manager",
        "vishal",
        "instagram",
        "focus on studies"
      ],
      "line": 20,
      "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "ActiTIME create tasks Test scenario",
  "description": "",
  "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is actiTIME Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"admin\" and user enters \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on new Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select customer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters task details \"akhil\" and \"snapchat\" and \"focus on studies\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on create tasks button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Taks_StepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8617298900,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.Title_of_login_page_is_actiTIME_Login()"
});
formatter.result({
  "duration": 13021100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "manager",
      "offset": 37
    }
  ],
  "location": "Taks_StepDefinition.user_enters_and_user_enters(String,String)"
});
formatter.result({
  "duration": 226448000,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 166989900,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3156586200,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.click_on_new_Button()"
});
formatter.result({
  "duration": 183569100,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_select_customer()"
});
formatter.result({
  "duration": 47434900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ext\\-gen222\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-9B1Q1FM\u0027, ip: \u0027192.168.121.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\ANU\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:61293}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6ed26011601c041ca21abe88962b1da4\n*** Element info: {Using\u003did, value\u003dext-gen222}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat step_Definiotions.Taks_StepDefinition.user_select_customer(Taks_StepDefinition.java:58)\r\n\tat ✽.Then user select customer(E:/Akhil\u0027s/ActiTIMEBddFramework/src/main/java/features/tasks.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "akhil",
      "offset": 26
    },
    {
      "val": "snapchat",
      "offset": 38
    },
    {
      "val": "focus on studies",
      "offset": 53
    }
  ],
  "location": "Taks_StepDefinition.user_enters_task_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.user_click_on_create_tasks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "ActiTIME create tasks Test scenario",
  "description": "",
  "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is actiTIME Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"admin\" and user enters \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on new Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select customer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters task details \"krishna\" and \"whatsapp\" and \"focus on studies\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on create tasks button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Taks_StepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8174119400,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.Title_of_login_page_is_actiTIME_Login()"
});
formatter.result({
  "duration": 9468300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "manager",
      "offset": 37
    }
  ],
  "location": "Taks_StepDefinition.user_enters_and_user_enters(String,String)"
});
formatter.result({
  "duration": 317211800,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 107606700,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2009139500,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.click_on_new_Button()"
});
formatter.result({
  "duration": 99278500,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_select_customer()"
});
formatter.result({
  "duration": 32041800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ext\\-gen222\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-9B1Q1FM\u0027, ip: \u0027192.168.121.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\ANU\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:61318}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9c1480a102408e709bc48121f6a47582\n*** Element info: {Using\u003did, value\u003dext-gen222}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat step_Definiotions.Taks_StepDefinition.user_select_customer(Taks_StepDefinition.java:58)\r\n\tat ✽.Then user select customer(E:/Akhil\u0027s/ActiTIMEBddFramework/src/main/java/features/tasks.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "krishna",
      "offset": 26
    },
    {
      "val": "whatsapp",
      "offset": 40
    },
    {
      "val": "focus on studies",
      "offset": 55
    }
  ],
  "location": "Taks_StepDefinition.user_enters_task_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.user_click_on_create_tasks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "ActiTIME create tasks Test scenario",
  "description": "",
  "id": "actitime-tasks-feature;actitime-create-tasks-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is actiTIME Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"admin\" and user enters \"manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on new Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select customer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters task details \"vishal\" and \"instagram\" and \"focus on studies\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on create tasks button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Taks_StepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 9201218800,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.Title_of_login_page_is_actiTIME_Login()"
});
formatter.result({
  "duration": 8574900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "manager",
      "offset": 37
    }
  ],
  "location": "Taks_StepDefinition.user_enters_and_user_enters(String,String)"
});
formatter.result({
  "duration": 234980200,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 116409800,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 2801647000,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.click_on_new_Button()"
});
formatter.result({
  "duration": 245034400,
  "status": "passed"
});
formatter.match({
  "location": "Taks_StepDefinition.user_select_customer()"
});
formatter.result({
  "duration": 23817300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ext\\-gen222\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-9B1Q1FM\u0027, ip: \u0027192.168.121.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\ANU\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:61345}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0cc7cc98ddf2dd4e1049bb0840e294ba\n*** Element info: {Using\u003did, value\u003dext-gen222}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat step_Definiotions.Taks_StepDefinition.user_select_customer(Taks_StepDefinition.java:58)\r\n\tat ✽.Then user select customer(E:/Akhil\u0027s/ActiTIMEBddFramework/src/main/java/features/tasks.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishal",
      "offset": 26
    },
    {
      "val": "instagram",
      "offset": 39
    },
    {
      "val": "focus on studies",
      "offset": 55
    }
  ],
  "location": "Taks_StepDefinition.user_enters_task_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.user_click_on_create_tasks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Taks_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});