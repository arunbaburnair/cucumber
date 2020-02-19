package step_definitions;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GeoShieldSignIn {
	 public WebDriver driver;
	
	 @When("^enter_UserName \"(.*?)\"$")
		public void enter_UserName(String arg1) throws Throwable {
		driver = Hooks.driver;
		driver.navigate().to("http://172.30.6.51:5001/");
	}

	@Then("^enter_password \"(.*?)\"$")
	public void enter_password(String arg1) throws Throwable {
	   System.out.println(driver.getCurrentUrl());
	   String url = driver.getCurrentUrl();
	   assertEquals("test",url);
	}

	@Then("^click on login button$")
	public void click_on_login_button() throws Throwable {
		  System.out.println(driver.getCurrentUrl());
	}

	@Then("^login page should be displayed$")
	public void login_page_should_be_displayed() throws Throwable {
		  System.out.println(driver.getCurrentUrl());
			}

}
