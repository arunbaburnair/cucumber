Feature: Login GeoShield application

 Scenario Outline: Login with valid credentials
    When enter userName "<username>"
    Then enter password "<password>"
    And click on login button
    Then login page should be displayed
    
Examples:
    | username   | password |
    | patroluser | Test@153 |
    | testuser_2 | test_password |
    | userSuper | test_super |
