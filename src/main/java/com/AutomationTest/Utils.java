package com.AutomationTest;

import org.openqa.selenium.By;

public class Utils extends BasePage {


    public static void clickOnElement(By by){
        driver.findElement(by).click();
    }
    public static void typeText(By by, String keys){
        driver.findElement(by).sendKeys(keys);
    }
    public static String getText(By by){
        return driver.findElement(by).getText();
    }





}
