package ramdonPackage;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class sampleAlert {
	@Test
	public void softAssert() throws InterruptedException {
		
		
		//System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://www.yahoo.com");
		SoftAssert assertion = new SoftAssert();
		String actualTitle = driver.getTitle();
		String expectedTitle = "Test";
		assertion.assertEquals(actualTitle, expectedTitle);
		
		
		System.out.println("Test worked");
		
		Thread.sleep(2000);
		
		driver.quit();
		
		//assertion.assertAll();
		
		

	}

}
