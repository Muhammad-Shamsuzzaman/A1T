package ramdonPackage;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class findElements {

	public static void main(String[] args) throws InterruptedException {
		
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.yahoo.com/");
		
		List<WebElement> elements = driver.findElements(By.tagName("a"));
		
		for (WebElement currentElements : elements) {
			
			String linkText = currentElements.getText();
			
			System.out.println(linkText);
			
			
		}

	}

}
