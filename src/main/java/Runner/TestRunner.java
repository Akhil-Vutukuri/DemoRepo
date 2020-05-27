package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\Akhil's\\ActiTIMEBddFramework\\src\\main\\java\\features\\tasks.feature",
		glue= {"step_Definiotions"},
		format= {"pretty","html:test-output"},
		dryRun = false,
		monochrome = true
		)

public class TestRunner {
}
