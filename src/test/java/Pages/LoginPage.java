package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends CommonPage{
	
	WebDriver driver;
	
	@FindBy(xpath="//div/a[3][contains(text(), 'Sign In')]")
	private WebElement label_SignIn;
	
	@FindBy(xpath="//div/a[2][contains(text(), 'Sign Up')]")
	private WebElement label_SignUp;
	
	@FindBy(xpath="//button[contains(text(), ' Current location')]")
	private WebElement lable_CurrLocBtn;
	
	@FindBy(xpath="//form[@id='searchform']//input")
	private WebElement placeHolder_CityName;
	
	@FindBy (xpath="//button[contains(text(), 'Search')]")
	private WebElement btn_Search;
	
	@FindBy (xpath="//div[contains(text(), 'Not found')]")
	private WebElement msg_NotFound;
	
	@FindBy (xpath="//p[starts-with(text(),' temperature from')]")
	private WebElement msg_Found;

	public LoginPage(WebDriver driver) {
		super(driver);
		this.driver = driver;
		PageFactory.initElements( driver, this );
	}

	public void navigateToLoginPage() {
		driver.get("https://openweathermap.org/");		
	}
	
	public String getTitleOfPage() {
		String pageTitle=driver.getTitle();
		return pageTitle;
	}
	
	public void verifyLabels() {
		waitForElementToBeVisible(label_SignIn);
		validateElementDisplayedInPage(label_SignIn);
		System.out.println("Sign In Label Displayed");
		validateElementDisplayedInPage(label_SignUp);
		waitForElementToBeVisible(label_SignUp);
		System.out.println("label_SignUp Label Displayed");
		
	}
	
	public void enterCityNameAndClickSearch(String cityName) {
		waitForElementToBeVisible(placeHolder_CityName);
		clearAndSendkeys(cityName,placeHolder_CityName);
		btn_Search.click();
	}
	
	public String verifyInvalidCityMessage() {
		waitForElementToBeVisible(msg_NotFound);
		validateElementDisplayedInPage(msg_NotFound);
		String text=msg_NotFound.getText();
		return text;
	}
	
	/*public String inValidCitySearch(String invalidCityName) {
		clearAndSendkeys(invalidCityName,placeHolder_CityName);
		btn_Search.click();
		waitForElementToBeVisible(msg_NotFound);
		validateElementDisplayedInPage(msg_NotFound);
		String text=msg_NotFound.getText();
		return text;		
	}*/
	
	public String validCitySearchMessage() {
		waitForElementToBeVisible(msg_Found);
		validateElementDisplayedInPage(msg_Found);
		String text=msg_Found.getText();
		return text;		
	}
}
