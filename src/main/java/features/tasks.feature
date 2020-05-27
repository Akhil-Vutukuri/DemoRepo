Feature: ActiTIME tasks feature

Scenario Outline: ActiTIME create tasks Test scenario

Given User is already on Login Page
When Title of login page is actiTIME Login
Then User enters "<username>" and user enters "<password>"
Then User clicks login button
Then user on home page
Then click on new Button
Then user select customer
Then user enters task details "<customername>" and "<projectname>" and "<taskname>"
Then user click on create tasks button
Then Close browser

Examples:
	| username |  password  |  customername  |  projectname  |  taskname          |
	| admin    |  manager   |  akhil         |  snapchat     |  focus on studies  |
	| admin    |  manager   |  krishna       |  whatsapp     |  focus on studies  |
	| admin    |  manager   |  vishal        |  instagram    |  focus on studies  |
	
