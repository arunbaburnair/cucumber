package step_definitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features",
		plugin = {"json:target/cucumber-report-composite.json","pretty", "html:target/cucumber-html-report", 
				"rerun:target/rerun.txt"},
		tags = {}
		,monochrome = true
		)
public class RunCukesTest{
	
}

