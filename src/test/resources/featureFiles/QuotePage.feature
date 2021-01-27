Feature: Quote page

  Background:
    Given I click on the Start btn
    And I am on the quote page
    And I select title as Mr
    And I enter first name as "Peter"
    And I enter surname as "Ben"


  @smoke
  @invalidemail
  Scenario: enter invalid email address

    When I enter email as "abcg.gmail.com"
    Then I can see error message as "Email Address:"

  @smoke
  @validemail
  Scenario: enter valid email address

    When I enter valid email as "abcg123@gmail.com"
    Then I cant see the error message
    When I enter invalid email as "abc123@gmail.com" confirm email
    Then I can see the error message as "Confirm Email Address: does not match"
    When I enter valid email as confirm email
    And I cant see the error message for confirm email
    And  I enter date as"30"
    And I enter month as "February"
    And I enter year as 1991"
    Then I can  see error message as "This policy is only available for people aged between 18 and 70"
    When I enter post code as "UB4 0QU"
    And I click on find address btn
    Then I can see the list of address
    And I select number "06"


