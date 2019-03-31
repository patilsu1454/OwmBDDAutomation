package Step_Defn;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.LoginPage;
import Utils.PageObjectManager;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginSteps {
	public static WebDriver driver;
	LoginPage loginPage;
	PageObjectManager pageObjectManager;
	
	@Given("^User is on Login Page$") 
	public void userNavigateToLoginPage() {
	System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\BDD\\OpenWeatherMapBDDFramework\\src\\test\\java\\Drivers\\chromedriver243.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	pageObjectManager = new PageObjectManager(driver);
	loginPage=pageObjectManager.getLoginPage();
	loginPage.navigateToLoginPage();
	System.out.println("Now we are on Login Page");
	}
	
	@When("^User verifies title of Login Page$")
	public void verifyPageTitle() {
	Assert.assertEquals(loginPage.getTitleOfPage().toString(), "Сurrent weather and forecast - OpenWeatherMap");	
	System.out.println("Successfully verified Page title");		
	}
	
	
	@Then("^Verify required labels are displayed$")
	public void requiredLabelVerified() {
    loginPage.verifyLabels();
    System.out.println("Few labels on Login page are validated");				
	}
	
	@When("^User enters city name in weather search \"([^\\\"]*)\"$")
	public void enterCityNameToSearch(String cityName) {
	loginPage.enterCityNameAndClickSearch(cityName);	
	}
	
	
	@Then("^Verifies that website suggests city is Not found$")
	public void invalidCityMsg() {
		Assert.assertTrue(loginPage.verifyInvalidCityMessage().toString().contains("Not found"));
		System.out.println("Invalid city search test passed");		
	}

	
	@Then("^Verifies that website suggests given city weather information$")
	public void validCitySearch() {	
		System.out.println("Valid city search test passed :"+loginPage.validCitySearchMessage());		
	}
	
		
	@When("^User enters cities name \"([^\"]*)\" with \"([^\"]*)\" in weather search$")
	public void user_enters_cities_name_with_in_weather_search(String cityName, String serialNumber) {
		 System.out.println("Now this run is for :"+cityName +" having serial number :"+serialNumber);
		loginPage.enterCityNameAndClickSearch(cityName);
	    
	}
	
	//Hook to close the driver after every scenario test
	@After
	public void afterEveryScenario() {
		driver.close();
		
	}
	
}
