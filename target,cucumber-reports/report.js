$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("QuotePage.feature");
formatter.feature({
  "line": 1,
  "name": "Quote page",
  "description": "",
  "id": "quote-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17311711700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I click on the Start btn",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am on the quote page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select title as Mr",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter first name as \"Peter\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter surname as \"Ben\"",
  "keyword": "And "
});
formatter.match({
  "location": "QuotePageStep.iClickOnTheStartBtn()"
});
formatter.result({
  "duration": 2106257000,
  "status": "passed"
});
formatter.match({
  "location": "QuotePageStep.iAmOnTheQuotePage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "QuotePageStep.iSelectTitleAsMr()"
});
formatter.result({
  "duration": 16992651200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//select[@name\u003d\"Questions[14].Value\"]/option[2]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-96CQHM1\u0027, ip: \u0027192.168.1.50\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.AutomationTest.Utils.clickOnElement(Utils.java:9)\r\n\tat com.AutomationTest.ApplicationPage.selectTitle(ApplicationPage.java:22)\r\n\tat steps.QuotePageStep.iSelectTitleAsMr(QuotePageStep.java:28)\r\n\tat ✽.And I select title as Mr(QuotePage.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 23
    }
  ],
  "location": "QuotePageStep.iEnterFirstNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ben",
      "offset": 20
    }
  ],
  "location": "QuotePageStep.iEnterSurnameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "enter invalid email address",
  "description": "",
  "id": "quote-page;enter-invalid-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@invalidemail"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter email as \"abcg.gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I can see error message as \"Email Address:\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abcg.gmail.com",
      "offset": 18
    }
  ],
  "location": "QuotePageStep.iEnterEmailAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email Address:",
      "offset": 28
    }
  ],
  "location": "QuotePageStep.iCanSeeErrorMessageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
formatter.before({
  "duration": 8161882000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I click on the Start btn",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am on the quote page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select title as Mr",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter first name as \"Peter\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter surname as \"Ben\"",
  "keyword": "And "
});
formatter.match({
  "location": "QuotePageStep.iClickOnTheStartBtn()"
});
formatter.result({
  "duration": 1634732700,
  "status": "passed"
});
formatter.match({
  "location": "QuotePageStep.iAmOnTheQuotePage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "QuotePageStep.iSelectTitleAsMr()"
});
formatter.result({
  "duration": 15001209200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//select[@name\u003d\"Questions[14].Value\"]/option[2]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-96CQHM1\u0027, ip: \u0027192.168.1.50\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.AutomationTest.Utils.clickOnElement(Utils.java:9)\r\n\tat com.AutomationTest.ApplicationPage.selectTitle(ApplicationPage.java:22)\r\n\tat steps.QuotePageStep.iSelectTitleAsMr(QuotePageStep.java:28)\r\n\tat ✽.And I select title as Mr(QuotePage.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 23
    }
  ],
  "location": "QuotePageStep.iEnterFirstNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ben",
      "offset": 20
    }
  ],
  "location": "QuotePageStep.iEnterSurnameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "enter valid email address",
  "description": "",
  "id": "quote-page;enter-valid-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@validemail"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter valid email as \"abcg123@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I cant see the error message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I enter invalid email as \"abc123@gmail.com\" confirm email",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I can see the error message as \"Confirm Email Address: does not match\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I enter valid email as confirm email",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I cant see the error message for confirm email",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter date as\"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter month as \"February\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter year as 1991\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can  see error message as \"This policy is only available for people aged between 18 and 70\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I enter post code as \"UB4 0QU\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on find address btn",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I can see the list of address",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I select number \"06\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abcg123@gmail.com",
      "offset": 24
    }
  ],
  "location": "QuotePageStep.iEnterValidEmailAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QuotePageStep.iCantSeeTheErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 26
    }
  ],
  "location": "QuotePageStep.iEnterInvalidEmailAsConfirmEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Email Address: does not match",
      "offset": 32
    }
  ],
  "location": "QuotePageStep.iCanSeeTheErrorMessageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QuotePageStep.iEnterValidEmailAsConfirmEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QuotePageStep.iCantSeeTheErrorMessageForConfirmEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 16
    }
  ],
  "location": "QuotePageStep.iEnterDateAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 18
    }
  ],
  "location": "QuotePageStep.iEnterMonthAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1991",
      "offset": 16
    }
  ],
  "location": "QuotePageStep.iEnterYearAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 35500,
  "status": "passed"
});
});