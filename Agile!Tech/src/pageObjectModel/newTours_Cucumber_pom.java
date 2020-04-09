package pageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class newTours_Cucumber_pom {
	
	WebDriver driver;
	
	public newTours_Cucumber_pom(WebDriver dr) {
		
		dr = driver;
	}
	
	public WebElement firstName() {
		
		WebElement firstName = driver.findElement(By.name("firstName"));
		return firstName;
	}
	
	public WebElement home() {
		
		WebElement home = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[1]/td[2]/font/a"));
		
		return home;
	}
	
	public WebElement flights() {
		
		WebElement flights = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/a"));
		
		return flights;
	}
	
	public WebElement hotels() {
		
	WebElement hotels = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[3]/td[2]/a"));
	
	return hotels;
	}
	
	public WebElement carRentals() {
		
		WebElement carRentals = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[4]/td[2]/font/a"));
		
		return carRentals;
	}
	
	public WebElement cruises() {
		
		WebElement cruises = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[5]/td[2]/a"));
		
		return cruises;
	}
	
	public WebElement destinations() {
		
		WebElement destinations = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[6]/td[2]/a"));
		
		return destinations;
	}
	
	public WebElement vacations() {
		
		WebElement vacations = driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[7]/td[2]/a"));
		
		return vacations;
	}

}
