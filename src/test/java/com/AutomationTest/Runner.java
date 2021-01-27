package com.AutomationTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/featureFiles",
        plugin = {"pretty", "html:target,cucumber-reports"},
        tags = {"@smoke"},
        glue = {"com.AutomationTest", "steps"})


public class Runner {
}
