package ramdonPackage;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ClickAllLinks {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.yahoo.com/");
		
		driver.manage().window().maximize();
		
		List<WebElement> links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total Links are "+ links.size());
		
		ArrayList<String> hrefs = new ArrayList<String>();
		
		for (WebElement currentLinks : links) {
	        System.out.println(currentLinks.getText());
	        System.out.println(currentLinks.getAttribute("href"));
	        hrefs.add(currentLinks.getAttribute("href")); 
	        
	    }
		int i=0;
	    for (String href : hrefs) {
	        driver.navigate().to(href);
	        System.out.println((++i)+": navigated to URL with href: "+href); 
	        
	    }
		
	    driver.quit();
	    
	    System.out.println("Test Completed");
		

	}
	 
}
