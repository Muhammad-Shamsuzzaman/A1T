package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pom.newToursRegistrationPage;

public class nTours_step {
	
	
    WebDriver driver; 
	newToursRegistrationPage rp;
	
	@Given("^user enters the browser name \"([^\"]*)\"$")
	public void user_enters_the_browser_name(String browserName) {  
	

	if(browserName.equalsIgnoreCase("chrome")) {
	
		driver = new ChromeDriver();
	       //lp=new newToursLinkPage(driver);
	       rp=new newToursRegistrationPage(driver);
	}
		
		
		

		else if(browserName.equalsIgnoreCase("firefox")){
		 driver = new FirefoxDriver(); 
		 rp=new newToursRegistrationPage(driver);
		 
		}
       

   else if(browserName.equalsIgnoreCase("InternetExplorer")) {
	
	
    driver = new InternetExplorerDriver();
	//lp=new newToursLinkPage(driver);
    rp=new newToursRegistrationPage(driver);}

	
}
	@When("^user is in the home page$")
	public void user_is_in_the_home_page() throws InterruptedException {
	
	     driver.manage().deleteAllCookies();
		 
		 Thread.sleep(2000);
		 
		 driver.get("http://newtours.demoaut.com/mercuryregister.php");
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
         driver.manage().window().maximize();
    
   
}
		
	@Then("^user clicks on the home link$")
	public void user_clicks_on_the_home_link() throws InterruptedException {
		Thread.sleep(3000);
		
		lp.Home().click();
	}

	@When("^user will validate the title of the Home page$")
	public void user_will_validate_the_title_of_the_Home_page()  {
	
		String title1 = driver.getTitle();
		
		System.out.println(title1);
	}

	@When("^user will go back to home page$")
	public void user_will_go_back_to_home_page() {
		driver.navigate().back();
	}

	@When("^user will click on Flights link$")
	public void user_will_click_on_Flights_link() throws InterruptedException {
	  
		Thread.sleep(3000);
	  
		lp.Flights().click();
	}

	@When("^user will validate the title of the Flights page$")
	public void user_will_validate_the_title_of_the_Flights_page() {
	 
		String title2 = driver.getTitle();
		
		 
	 System.out.println(title2);
	 
	}
	
	@When("^user will click on the Hotels link$")
	public void user_will_click_on_the_Hotels_link() throws InterruptedException {
		Thread.sleep(3000);
		lp.Hotels().click();
	}

	@When("^user will validate the title of the Hotels page$")
	public void user_will_validate_the_title_of_the_Hotels_page()  {
	   String title3= driver.getTitle();
	   
	    
	   System.out.println(title3);
	}

	@When("^user will click on the Car Rentals link$")
	public void user_will_click_on_the_Car_Rentals_link() throws InterruptedException {
	 
		Thread.sleep(3000);
		lp.CarRentals().click();
	}
	
	@When("^user will validate the title of the Car Rentals page$")
	public void user_will_validate_the_title_of_the_Car_Rentals_page()  {
	  
		String title4=driver.getTitle();
			
	  System.out.println(title4);
	}
	
	@When("^user will click on Cruises link$")
	public void user_will_click_on_Cruises_link() throws InterruptedException  {
	
		Thread.sleep(3000);
		
		lp.Cruises().click();
	}

	@When("^user will validate the title of the Cruises page$")
	public void user_will_validate_the_title_of_the_Cruises_page() {
		
		String title5=driver.getTitle();
		  
		
		  System.out.println(title5);
	}

	@When("^user will click on the Destinations link$")
	public void user_will_click_on_the_Destinations_link() throws InterruptedException{
	
		Thread.sleep(3000);
		
		lp.Destinations().click();
	}

	@When("^user will validate the title of the Destinations page$")
	public void user_will_validate_the_title_of_the_Destinations_page()  {
		
		String title6=driver.getTitle();
		
		
		  
		  System.out.println(title6);
	}

	@When("^user will click on the Vacations link$")
	public void user_will_click_on_the_Vacations_link() throws InterruptedException  {
		Thread.sleep(3000);
		
		lp.Vacations().click();
	
	}

	@When("^user will validate the title of the Vacations page$")
	public void user_will_validate_the_title_of_the_Vacations_page()  {
		
		String title7=driver.getTitle();
		  
	 System.out.println(title7);
		  
		 }

	@Then("^user close the browser$")
	public void user_close_the_browser() throws InterruptedException  {
	   
		Thread.sleep(2000);
		driver.quit();
	}

	/////////////task 3 B
	
	@When("^user enters First Name \"([^\"]*)\"$")
	public void user_enters_First_Name(String firstName)  {
	  rp.firstName().sendKeys(firstName);
	}

	@When("^user enters Last Name \"([^\"]*)\"$")
	public void user_enters_Last_Name(String lastName)  {
	    rp.lastName().sendKeys(lastName);
	}

	@When("^user enters Phone Number \"([^\"]*)\"$")
	public void user_enters_Phone_Number(String phoneNumber)  {
	  rp.Phone().sendKeys(phoneNumber);
	}

	@When("^user enter Email address \"([^\"]*)\"$")
	public void user_enter_Email_address(String email)  {
	    rp.Email().sendKeys(email);
	}

	@When("^user enters Address \"([^\"]*)\"$")
	public void user_enters_Address(String address) {
	 rp.Address().sendKeys(address);
	}

	@When("^user enters City \"([^\"]*)\"$")
	public void user_enters_City(String city)  {
	   rp.city().sendKeys(city);
	}

	@When("^user enter State \"([^\"]*)\"$")
	public void user_enter_State(String state)  {
	  rp.State().sendKeys(state);
	}

	@When("^user enters Zip Code \"([^\"]*)\"$")
	public void user_enters_Zip_Code(String zipCode)  {
	  rp.PostalCode().sendKeys(zipCode);
	  
	}
	@When("^user will select country \"([^\"]*)\"$")
	public void user_will_select_country(String country) {
	 WebElement Country =  rp.Country();
	 Select country1 = new Select (Country);
	 country1.selectByVisibleText(country);
	   
	}


	@When("^user enters User Name \"([^\"]*)\"$")
	public void user_enters_User_Name(String userName)  {
	    rp.UserName().sendKeys(userName);
	}

	@When("^user enters Password \"([^\"]*)\"$")
	public void user_enters_Password(String password)  {
	    rp.PassWord().sendKeys(password);
	}

	@When("^user enters Confirm Password \"([^\"]*)\"$")
	public void user_enters_Confirm_Password(String confirmPassword) {
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

}
