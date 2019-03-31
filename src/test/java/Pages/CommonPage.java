package Pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;

import java.util.List;

public class CommonPage {

    public WebDriver driver;


    public CommonPage(WebDriver driver) {
        this.driver = driver;
    }
     
    public void waitForElementToBeVisible(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void waitForElementsToBeVisible( List<WebElement> element) {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfAllElements(element));
    }   

    public void clearAndSendkeys(String value,WebElement element)
    {
        element.clear();
        element.sendKeys(value);
    }
  
      public boolean validateElementDisplayedInPage(WebElement webElement) {
        try {
            if(webElement.isDisplayed()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }

    


}
