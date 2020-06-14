package ramdonPackage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class MultipleWindows {
	
	@Test
	public void TestCase1() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.yahoo.com/");
		
		driver.findElement(By.xpath("xpath")).click();
		
		String ParentWindow = driver.getWindowHandle();
		
		for(String Subwindow : driver.getWindowHandles()) {
			
			driver.switchTo().window(Subwindow);
		}
		
		driver.switchTo().window(ParentWindow);
	}
	

}
