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
public class Taks_StepDefinition {
	WebDriver driver;
	@Given("^User is already on Login Page$")
	public void User_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost/login.do");
	}

	@When("^Title of login page is actiTIME Login$")
	public void Title_of_login_page_is_actiTIME_Login() {
		String title = driver.getTitle();
		System.out.println("The title of the login page is---->"+title);
		Assert.assertEquals("actiTIME - Login", title);
	}

	@Then("^User enters \"([^\"]*)\" and user enters \"([^\"]*)\"$")
	public void user_enters_and_user_enters(String username, String password) {
		WebElement unTB = driver.findElement(By.id("username"));
		unTB.sendKeys(username);
		WebElement pwTB = driver.findElement(By.name("pwd"));
		pwTB.sendKeys(password);
	}

	@Then("^User clicks login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[text()='Login ']")).click();
	}

	@Then("^user on home page$")
	public void user_is_on_home_page() throws InterruptedException {
		Thread.sleep(2000);
		String title = driver.getTitle();
		System.out.println("The title of the home page is----"+title);
		Assert.assertEquals("actiTIME - Enter Time-Track", title);
	}

	@Then("^click on new Button$")
	public void click_on_new_Button() {
		driver.findElement(By.xpath("//span[text()='New']")).click();
	}

	@Then("^user select customer$")
	public void user_select_customer() {
		driver.findElement(By.id("ext-gen222")).click();
		driver.findElement(By.id("ext-gen324")).click();
	}

	@Then("^user enters task details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_task_details_and_and(String customername, String projectname, String taskname) {
		driver.findElement(By.id("createTasksPopup_newCustomer")).sendKeys(customername);
		driver.findElement(By.xpath("createTasksPopup_newProject")).sendKeys(projectname);
		driver.findElement(By.xpath("(//td[@class='nameCell first'])[1]")).sendKeys(taskname);
	}

	@Then("^user click on create tasks button$")
	public void user_click_on_create_tasks_button() {
		driver.findElement(By.xpath("//span[text()='Create Tasks']")).click();
	}

	@Then("^Close browser$")
	public void close_the_browser() {
		driver.quit();
	}
}
