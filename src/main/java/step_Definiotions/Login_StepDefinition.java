package step_Definiotions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Login_StepDefinition {

	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost/login.do");
	}
	
	@When("^title of login page is actiTIME Login$")
	public void titel_of_login_page_is_actiTIME_Login()
	{
		String title = driver.getTitle();
		System.out.println("The title of the login page is---->"+title);
		Assert.assertEquals("actiTIME - Login", title);
	}
	
	//Data driving without using examples keyword , using \"(.*)\" or \"([^\"]*)\" ---->Regular Expression 
	@Then("^user enters \"(.*)\" and user enters \"(.*)\"$")
	public void user_enters_username_and_enters_password(String username, String password)//pass parameters
	{
		WebElement unTB = driver.findElement(By.id("username"));
		unTB.sendKeys(username);
		WebElement pwTB = driver.findElement(By.name("pwd"));
		pwTB.sendKeys(password);
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()
	{
		driver.findElement(By.xpath("//div[text()='Login ']")).click();
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() throws InterruptedException
	{
		Thread.sleep(2000);
		String title = driver.getTitle();
		System.out.println("The title of the home page is----"+title);
		Assert.assertEquals("actiTIME - Enter Time-Track", title);
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

}
