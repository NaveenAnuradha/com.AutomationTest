package steps;

import com.AutomationTest.ApplicationPage;
import com.AutomationTest.TestPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class QuotePageStep {

    TestPage testPage = new TestPage();
    ApplicationPage applicationPage = new ApplicationPage();


    @Given("^I click on the Start btn$")
    public void iClickOnTheStartBtn() {
        testPage.clickOnStartBtn();
    }

    @And("^I am on the quote page$")
    public void iAmOnTheQuotePage() {
    }

    @And("^I select title as Mr$")
    public void iSelectTitleAsMr() {
        applicationPage.selectTitle();
    }

    @And("^I enter first name as \"([^\"]*)\"$")
    public void iEnterFirstNameAs(String firstName) {
        applicationPage.enterFirstName(firstName);
    }

    @And("^I enter surname as \"([^\"]*)\"$")
    public void iEnterSurnameAs(String surname) {
        applicationPage.enterSurname(surname);
    }

    @When("^I enter email as \"([^\"]*)\"$")
    public void iEnterEmailAs(String email) {
        applicationPage.enterEmail(email);
    }

    @Then("^I can see error message as \"([^\"]*)\"$")
    public void iCanSeeErrorMessageAs(String emailErrorMessage) {
        Assert.assertEquals(applicationPage.emailErrorMessage(), emailErrorMessage);
    }


    @When("^I enter valid email as \"([^\"]*)\"$")
    public void iEnterValidEmailAs(String validEmail) {
        applicationPage.enterEmail(validEmail);
    }

    @Then("^I cant see the error message$")
    public void iCantSeeTheErrorMessage() {
    }

    @When("^I enter invalid email as \"([^\"]*)\" confirm email$")
    public void iEnterInvalidEmailAsConfirmEmail(String invalidConfirmEmail) {
        applicationPage.enterConfirmEmail(invalidConfirmEmail);
    }

    @Then("^I can see the error message as \"([^\"]*)\"$")
    public void iCanSeeTheErrorMessageAs(String confirmEmailErrorMsg) {
        Assert.assertEquals(applicationPage.confirmEmailErrorMessage(), confirmEmailErrorMsg);
    }

    @When("^I enter valid email as confirm email$")
    public void iEnterValidEmailAsConfirmEmail(String email) {
        applicationPage.enterConfirmEmail(email);
    }

    @And("^I cant see the error message for confirm email$")
    public void iCantSeeTheErrorMessageForConfirmEmail() {
    }

    @And("^I enter date as\"([^\"]*)\"$")
    public void iEnterDateAs(String date) {
        applicationPage.enterDate(date);
    }

    @And("^I enter month as \"([^\"]*)\"$")
    public void iEnterMonthAs(String month) {
        applicationPage.typeMonth(month);
    }

    @And("^I enter year as (\\d+)\"$")
    public void iEnterYearAs(String year) {
        applicationPage.typeYear(year);
    }

//    @Then("^I can  see error message as \"([^\"]*)\"$")
//    public void iCanSeeErrorMessageAs(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @When("^I enter post code as \"([^\"]*)\"$")
//    public void iEnterPostCodeAs(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @And("^I click on find address btn$")
//    public void iClickOnFindAddressBtn() {
//    }

//    @Then("^I can see the list of address$")
//    public void iCanSeeTheListOfAddress() {
//    }

//    @And("^I select number \"([^\"]*)\"$")
//    public void iSelectNumber(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
}
