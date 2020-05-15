package Agile1Tech.sqaTest;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class test1 {
	@Test
	public void sampleTest() throws InterruptedException{
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		
		Thread.sleep(2000);
		
		driver.quit();

	}

}
