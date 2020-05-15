package pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class newToursRegistrationPage {

	
	
WebDriver driver;
	
	public newToursRegistrationPage(WebDriver dr){
		
		driver = dr;
	}
	
	
	
	public WebElement firstName() {
	
	WebElement firstname= driver.findElement(By.name("firstName"));
	
	return firstname;
	
	}
	
	public WebElement lastName() {
		
		WebElement lastName= driver.findElement(By.name("lastName"));
		
		return lastName;
		
		}
	
	public WebElement Phone () {
		
		WebElement Phone= driver.findElement(By.name("phone"));
		
		return Phone;
		
		}
	
	public WebElement Email() {
		
		WebElement Email = driver.findElement(By.name("userName"));
		
		return Email ;
		
		}

	public WebElement Address() {
		
		WebElement Address = driver.findElement(By.name("address1"));
		
		return Address ;
		
		}
	
	
    public WebElement city() {
		
		WebElement city = driver.findElement(By.name("city"));
		
		return city ;
		
		}
	

	public WebElement State() {
		
		WebElement State = driver.findElement(By.name("state"));
		
		return State ;
		
		}
	
	public WebElement PostalCode() {
		
		WebElement PostalCode = driver.findElement(By.name("postalCode"));
		
		return PostalCode ;
		
		}
    public WebElement Country() {
		
		WebElement Country = driver.findElement(By.name("country"));
		
		return Country ;
		
		}
	
	
      public WebElement UserName () {
		
		WebElement UserName = driver.findElement(By.name("email"));
		
		return UserName ;
		}
		
	
	
	
      public WebElement PassWord () {
  		
  		WebElement PassWord = driver.findElement(By.name("password"));
  		
  		return PassWord ;
  		}
  		

      public WebElement ConfirmPassWord () {
  		
  		WebElement ConfirmPassWord = driver.findElement(By.name("confirmPassword"));
  		
  		return ConfirmPassWord ;
  		}
  		
	
      public WebElement Submit() {
    		
    		WebElement Submit = driver.findElement(By.name("register"));
    		
    		return Submit ;
    		}
	
	
	
}
