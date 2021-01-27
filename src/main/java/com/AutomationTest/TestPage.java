package com.AutomationTest;

import org.openqa.selenium.By;

public class TestPage extends Utils {

    By _start = By.xpath("//a[@title=\"Get Quote\"]");



    public void clickOnStartBtn(){
        clickOnElement(_start);
    }


}
