package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Selenium\\BDD\\OpenWeatherMapBDDFramework\\src\\test\\java\\Features",
		glue= {"Step_Defn"},
		plugin = { "pretty", "html:target/OpenWeatherMapAutomationReport" },
		monochrome = true
		)

public class TestRunner {
	
	

}
