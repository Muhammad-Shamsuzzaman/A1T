package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pom.newToursRegistrationPage;

public class nTours_step {
	WebDriver driver;
	newToursRegistrationPage rp;
	
	@Given("^user is in the home page$")
	public void user_is_in_the_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		driver = new ChromeDriver();
		rp = new newToursRegistrationPage(driver);
		
		driver.manage().deleteAllCookies();
		
		driver.get("http://newtours.demoaut.com/mercuryregister.php");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
	}

	@When("^user enters First Name \"([^\"]*)\"$")
	public void user_enters_First_Name(String firstName) {
		 rp.firstName().sendKeys(firstName);
	}

	@When("^user enters Last Name \"([^\"]*)\"$")
	public void user_enters_Last_Name(String lastName) {
		rp.lastName().sendKeys(lastName);
	}

	@When("^user enters Phone Number \"([^\"]*)\"$")
	public void user_enters_Phone_Number(String phoneNumber){
		rp.Phone().sendKeys(phoneNumber);
	}

	@When("^user enter Email address \"([^\"]*)\"$")
	public void user_enter_Email_address(String email) {
		rp.Email().sendKeys(email);
	}

	@When("^user enters Address \"([^\"]*)\"$")
	public void user_enters_Address(String address) {
		rp.Address().sendKeys(address);
	}

	@When("^user enters City \"([^\"]*)\"$")
	public void user_enters_City(String city) {
		rp.city().sendKeys(city);
	}

	@When("^user enter State \"([^\"]*)\"$")
	public void user_enter_State(String state) {
		rp.State().sendKeys(state);
	}

	@When("^user enters Zip Code \"([^\"]*)\"$")
	public void user_enters_Zip_Code(String zipCode) {
	    rp.PostalCode().sendKeys(zipCode);
	}

	@When("^user will select country \"([^\"]*)\"$")
	public void user_will_select_country(String country) {
	  WebElement Country =  rp.Country();
	  Select country1 = new Select (Country);
	  country1.selectByVisibleText(country);
	    
	}

	@When("^user enters User Name \"([^\"]*)\"$")
	public void user_enters_User_Name(String userName) {
		 rp.UserName().sendKeys(userName); 
	}

	@When("^user enters Password \"([^\"]*)\"$")
	public void user_enters_Password(String password) {
		rp.PassWord().sendKeys(password);
	}

	@When("^user enters Confirm Password \"([^\"]*)\"$")
	public void user_enters_Confirm_Password(String confirmPassword)  {
		rp.ConfirmPassWord().sendKeys(confirmPassword);  
	}

	@When("^user validates the submit button$")
	public void user_validates_the_submit_button() {
		WebElement submit= rp.Submit();
		
		boolean enabled= submit.isEnabled();
		boolean displayed= submit.isDisplayed();
		
		Assert.assertTrue(enabled);
		Assert.assertTrue(displayed);
	    
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws InterruptedException {
		
		Thread.sleep(3000);
		
		driver.quit();
	    
	}



}
