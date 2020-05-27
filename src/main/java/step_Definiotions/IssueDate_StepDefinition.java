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
public class IssueDate_StepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on login Page$")
	public void user_is_already_on_login_Page() {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost/login.do");	
	}

	@When("^title of login page is actiTIME login$")
	public void title_of_login_page_is_actiTIME_login() {
		String title = driver.getTitle();
		System.out.println("The title of the page is--->"+title);
		Assert.assertEquals("actiTIME - Login", title);
		
	}

	@Then("^user enters Username and user enters Password$")
	public void user_enters_Username_and_user_enters_Password() {
		WebElement unTB = driver.findElement(By.id("username"));
		unTB.sendKeys("admin");
		WebElement pwTB = driver.findElement(By.name("pwd"));
		pwTB.sendKeys("manager");
		
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
		driver.findElement(By.xpath("//div[text()='Login ']")).click();
	}

	@Then("^user is on Home page$")
	public void user_is_on_Home_page() throws InterruptedException {
		Thread.sleep(2000);
		String title = driver.getTitle();
		System.out.println("The title of the home page is----"+title);
		Assert.assertEquals("actiTIME - Enter Time-Track", title);
	}

	@Then("^user clicks on settings tab$")
	public void user_clicks_on_settings_tab() {
		driver.findElement(By.xpath("(//div[@class='popup_menu_label'])[1]")).click();
	}

	@Then("^user clicks on Liscenses tab$")
	public void user_clicks_on_Liscenses_tab() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[text()='Licenses']")).click();
	}

	@Then("^user is on liscenses page$")
	public void user_is_on_liscenses_page() {
		String title = driver.getTitle();
		System.out.println("the title of the page is----->"+ title);
		Assert.assertEquals("actiTIME - Licenses", title);
	}

	@Then("^user verify the issue date$")
	public void user_verify_the_issue_date() {
		String issue_date = driver.findElement(By.xpath("//nobr[text()='Issue Date:']/../../*[2]")).getText();
		String expected = issue_date;
		System.out.println("The issue date is --------->"+expected);
		Assert.assertEquals("Jul 14, 2017", expected);		
	}

}
