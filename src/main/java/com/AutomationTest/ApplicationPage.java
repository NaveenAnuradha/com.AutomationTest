package com.AutomationTest;

import org.openqa.selenium.By;

public class ApplicationPage extends Utils {

    By _title = By.xpath("//select[@name=\"Questions[14].Value\"]/option[2]");
    By _firstName = By.xpath("//input[@tag=\"FirstName\"]");
    By _surname = By.xpath("//input[@tag=\"Surname\"]");
    By _email = By.xpath("//input[@tag=\"EmailAddress\"]");
    By _emailErrorMessage = By.xpath("//span[text()=\"Email Address:\"]");
    By _confirmEmail = By.xpath("//div[@class=\"questionSection disabled-policy-not-selected customerdetails\"]/div[7]");
    By _confirmEmailErrorMessage = By.xpath("//span[@for=\"b0e51f84-c91f-4478-ae33-7e8ba198536c\"]");
    By _telephoneNumber = By.xpath("title=\"Telephone Number:\"");
    By _date = By.xpath("//div[@id=\"container-7c85c4e9-c2fb-4743-8caf-28d1ed31b44b\"]/div/div/input[1]");
    By _month = By.xpath("//div[@id=\"container-7c85c4e9-c2fb-4743-8caf-28d1ed31b44b\"]/div/div/input[2]");
    By _year = By.xpath("//div[@id=\"container-7c85c4e9-c2fb-4743-8caf-28d1ed31b44b\"]/div/div/input[3]");
    By _ukResident = By.xpath("//input[@title=\"UK Resident\"]");


    public void selectTitle() {
        clickOnElement(_title);
    }

    public void enterFirstName(String firstName) {
        typeText(_firstName, firstName);
    }

    public void enterSurname(String surname) {
        typeText(_surname, surname);
    }

    public void enterEmail(String email) {
        typeText(_email, email);
    }

    public String emailErrorMessage() {
        return getText(_emailErrorMessage);
    }

    public void enterConfirmEmail(String confirmEmail) {
        typeText(_confirmEmail, confirmEmail);
    }

    public String confirmEmailErrorMessage(){
      return getText(_confirmEmailErrorMessage);
    }

    public void enterTelephoneNumber(String telephoneNumber) {
        typeText(_telephoneNumber, telephoneNumber);
    }
    public void enterDate(String date){
        typeText(_date, date);
    }
    public void typeMonth(String month){
        typeText(_month, month);
    }
    public void typeYear(String year){
        typeText(_year,year);
    }
    public void clickOnUkResident(){
        clickOnElement(_ukResident);
    }




}
