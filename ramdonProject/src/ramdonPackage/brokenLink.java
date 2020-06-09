package ramdonPackage;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class brokenLink {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.yahoo.com/");
		
		List<WebElement> links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total Links are "+ links.size());
		
		for(int i=0;i<links.size();i++) {
			
			WebElement elements = links.get(i);
			
			String url = elements.getAttribute("href");
			
			verifyLinkActive(url);
		}

	}

	public static void verifyLinkActive(String linkUrl) {
		try {
			
			URL url = new URL(linkUrl);
			
			HttpURLConnection httpURLConnect = (HttpURLConnection)url.openConnection();
			
			httpURLConnect.setConnectTimeout(3000);
			
			httpURLConnect.connect();
			
			if(httpURLConnect.getResponseCode()==200) {
				
				System.out.println(linkUrl+" - "+httpURLConnect.getResponseMessage());
			}
			
			if((httpURLConnect.getResponseCode()==HttpURLConnection.HTTP_NOT_FOUND)) {
				
				System.out.println(linkUrl+ " - "+httpURLConnect.getResponseMessage()+" - "+ HttpURLConnection.HTTP_NOT_FOUND);
			}
			
		}
		
		catch (Exception e) {
			
			
		}
	}

}
