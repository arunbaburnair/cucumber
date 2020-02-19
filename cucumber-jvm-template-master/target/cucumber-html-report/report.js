$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GeoshieldSignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Login GeoShield application",
  "description": "",
  "id": "login-geoshield-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-geoshield-application;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "enter userName \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "login page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-geoshield-application;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-geoshield-application;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "patroluser",
        "Test@153"
      ],
      "line": 11,
      "id": "login-geoshield-application;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "testuser_2",
        "test_password"
      ],
      "line": 12,
      "id": "login-geoshield-application;login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "userSuper",
        "test_super"
      ],
      "line": 13,
      "id": "login-geoshield-application;login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23196957000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-geoshield-application;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "enter userName \"patroluser\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter password \"Test@153\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "login page should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GeoShieldSignIn.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoShieldSignIn.login_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4691919700,
  "status": "passed"
});
formatter.before({
  "duration": 15729454500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-geoshield-application;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "enter userName \"testuser_2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter password \"test_password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "login page should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GeoShieldSignIn.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoShieldSignIn.login_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1588843200,
  "status": "passed"
});
formatter.before({
  "duration": 16180969700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-geoshield-application;login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "enter userName \"userSuper\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter password \"test_super\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "login page should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "GeoShieldSignIn.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeoShieldSignIn.login_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1651773300,
  "status": "passed"
});
formatter.uri("features/ShoppingCart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping cart on an e-commerce website",
  "description": "",
  "id": "shopping-cart-on-an-e-commerce-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15774818500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sign in and sign out",
  "description": "",
  "id": "shopping-cart-on-an-e-commerce-website;sign-in-and-sign-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCart.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 18966313100,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCart.i_sign_in()"
});
formatter.result({
  "duration": 14780668400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCart.i_sign_out()"
});
formatter.result({
  "duration": 466911800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign out\"}\n  (Session info: chrome\u003d80.0.3987.116)\n  (Driver info: chromedriver\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 422 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.0\u0027, revision: \u0027350cf60\u0027, time: \u00272016-10-13 10:48:57 -0700\u0027\nSystem info: host: \u0027LAPTOP-PL84SUBB\u0027, ip: \u0027192.168.1.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60709}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\Arun\\AppData\\Local\\Temp\\scoped_dir18864_813557542}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.116, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: dc45be3115daff07f5202a1b224bbc1d\n*** Element info: {Using\u003dlink text, value\u003dSign out}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat modules.SignoutAction.Execute(SignoutAction.java:16)\r\n\tat step_definitions.ShoppingCart.i_sign_out(ShoppingCart.java:56)\r\n\tat ✽.Then I sign out(features/ShoppingCart.feature:6)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026back\u003dmy-account");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3308362000,
  "status": "passed"
});
formatter.uri("features/seleniumframework.feature");
formatter.feature({
  "line": 1,
  "name": "Access seleniumframework.com website",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "id": "access-seleniumframework.com-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16749096600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Print title, url",
  "description": "",
  "id": "access-seleniumframework.com-website;print-title,-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open seleniumframework website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.match({
  "location": "BlankStepDefs.i_open_seleniumframework_website()"
});
formatter.result({
  "duration": 22582206500,
  "status": "passed"
});
formatter.match({
  "location": "BlankStepDefs.i_print_title_and_URL()"
});
formatter.result({
  "duration": 736987300,
  "status": "passed"
});
formatter.after({
  "duration": 2299298100,
  "status": "passed"
});
});