package ramdonPackage;

import java.util.concurrent.TimeUnit;	
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class test_newTours {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.manage().deleteAllCookies();
		
		driver.get("http://newtours.demoaut.com/mercurywelcome.php");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
		
		driver.findElement(By.linkText("Cruises")).click();
		String currentTitle = driver.getCurrentUrl();
		System.out.println(currentTitle);
		
		Thread.sleep(2000);
		
		driver.quit();
	}

}
