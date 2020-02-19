package step_definitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

public class SRunCukesTest_2 {
	
	@RunWith(Cucumber.class)
	@CucumberOptions(
	features = { "@target/rerun.txt" }, 
	plugin = { "json:target/cucumber-report-composite.json", "pretty",
	        "\"html:target/falied-report\""})
	public class _TestExampleCucumberIT {
	}
	

}
