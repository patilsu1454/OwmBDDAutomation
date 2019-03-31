# OwmBDDAutomation
As per Prudential requirements

Selenium with Cucumber (BDD Framework) for OpenWeatherMap Automation testing

Cucumber is a testing approach which supports Behaviour Driven Development (BDD).
It explains the behaviour of the application in a simple English text using Gherkin language.

## Build Status: Passed
## Run: mvn clean install test

## Steps to run locally:
1.	Install Java 8
2.	Download Eclipse IDE and add the Maven plugin from Eclipse->Help->Eclipse Marketplace
3.	Using https://marketplace.eclipse.org/content/natural drag and drop to eclipse plugins to edit and maintain BDD files with ease
4.  Clone the project from github repo
5.	Now Right click on project and run as Maven install
6.	Run the TestRunner.java (.src\test\java\Runner\TestRunner.java)
7.	To see the automation execution report, navigate to target\OpenWeatherMapAutomationReport and access index.html file in any of browsers
## Step to run remotely using TeamCity CI/CD tool
1.	Set up teamcity agent with Java 8
2.	In the teamcity, create a build configuration for Maven project
3.	Under General Settings, create a pipeline name and provide artefact path to see the execution report in TeamCity run tab after executing the job ex: target/**/*
4.	Add Version control settings, provide git repository url 
5.	In Build step, select runner type as: Maven and set Goal as ‘clean test’
6.	Run this configures job from the pipeline created.
