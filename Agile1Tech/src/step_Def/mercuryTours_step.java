package step_Def;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjectModel.newTours;


public class mercuryTours_step {
	WebDriver driver;
	newTours nt;
	
	@Given("^user is in the home page$")
	public void user_is_in_the_home_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		driver = new ChromeDriver();
		nt = new newTours(driver);
		
		driver.manage().deleteAllCookies();
		
		Thread.sleep(1000);
		
		driver.get("http://newtours.demoaut.com/mercuryregister.php");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
	   
	}
	@When("^user clicks on the home link$")
	public void user_clicks_on_the_home_link() {
	    nt.home().click();
	}

	@When("^^user will validate the title of the Home page$")
	public void user_will_validate_the_title_of_the_home_page() throws Throwable {
	    String actualTitle = driver.getTitle();
	    String expectedTitle = "Welcome: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will go back to home page$")
	public void user_will_go_back_to_home_page() throws Throwable {
	    driver.navigate().back();
	}
	
	@When("^user will click on Flights link$")
	public void user_will_click_on_Flights_link() {
	    nt.flights().click();
	}

	@When("^user will validate the title of the Flights page$")
	public void user_will_validate_the_title_of_the_Flights_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Welcome: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Hotels link$")
	public void user_will_click_on_the_Hotels_link() {
	    nt.hotels().click();
	}

	@When("^user will validate the title of the Hotels page$")
	public void user_will_validate_the_title_of_the_Hotels_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Car Rentals link$")
	public void user_will_click_on_the_Car_Rentals_link() {
	    nt.carRentals().click();
	}

	@When("^user will validate the title of the Car Rentals page$")
	public void user_will_validate_the_title_of_the_Car_Rentals_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on Cruises link$")
	public void user_will_click_on_Cruises_link() {
	    nt.cruises().click();
	}

	@When("^user will validate the title of the Cruises page$")
	public void user_will_validate_the_title_of_the_Cruises_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Cruises: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Destinations link$")
	public void user_will_click_on_the_Destinations_link() {
	    nt.destinations().click();
	}

	@When("^user will validate the title of the Destinations page$")
	public void user_will_validate_the_title_of_the_Destinations_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Vacations link$")
	public void user_will_click_on_the_Vacations_link() {
	    nt.vacations().click();
	}

	@When("^user will validate the title of the Vacations page$")
	public void user_will_validate_the_title_of_the_Vacations_page() throws Throwable {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() {
	    driver.quit();
	}
	@When("^user enters First Name \"([^\"]*)\"$")
	public void user_enters_First_Name(String firstName) {
	    nt.getFirstName().sendKeys(firstName);
	}

	@When("^user enters Last Name \"([^\"]*)\"$")
	public void user_enters_Last_Name(String lastName) {
	    nt.getLastName().sendKeys(lastName);
	}

	@When("^user enters Phone Number \"([^\"]*)\"$")
	public void user_enters_Phone_Number(String phoneNumber) {
	    nt.getPhone().sendKeys(phoneNumber);
	}
	@When("^user enter Email address \"([^\"]*)\"$")
	public void user_enter_Email_address(String email) {
	    nt.getEmail().sendKeys(email);
	}

	@When("^user enters Address \"([^\"]*)\"$")
	public void user_enters_Address(String address) {
	    nt.getAddress().sendKeys(address);
	}

	@When("^user enters City \"([^\"]*)\"$")
	public void user_enters_City(String city) {
	    nt.getCity().sendKeys(city);
	}

	@When("^user enter State \"([^\"]*)\"$")
	public void user_enter_State(String state) {
	    nt.getState().sendKeys(state);
	}

	@When("^user enters Zip Code \"([^\"]*)\"$")
	public void user_enters_Zip_Code(String zipCode) {
	    nt.getPostalCode().sendKeys(zipCode);
	}

	@When("^user enters User Name \"([^\"]*)\"$")
	public void user_enters_User_Name(String userName) {
	    nt.getUserName().sendKeys(userName);
	}

	@When("^user enters Password \"([^\"]*)\"$")
	public void user_enters_Password(String password) {
	    nt.getPassword().sendKeys(password);
	}

	@When("^user enters Confirm Password \"([^\"]*)\"$")
	public void user_enters_Confirm_Password(String confirmPassword) throws Throwable {
	    nt.getConfirmPassword().sendKeys(confirmPassword);
	}

	@When("^user validates the submit button$")
	public void user_validates_the_submit_button() {
		WebElement submit = nt.verifySubmit();
		boolean enable = submit.isEnabled();
		Reporter.log("Verifying the submit button is enabled", true);
		boolean display = submit.isDisplayed();
		Reporter.log("Verifying the submit button is displayed", true);
		
		Assert.assertTrue(enable);
		Assert.assertTrue(display);
	}


}