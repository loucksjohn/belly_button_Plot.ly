### belly_button_Plot.ly
plotly homework assignment #15

## Description
This Belly Button Plot.ly project creates an interactive dashboard that allows the user to analyze the microbial portrait of each test's subject navel (belly button).  In 2011, the Public Science Lab at NC State began a study into the microbes that inhabit the human belly button, and the data supplied for this dashboard came directly out of that study.

## Operating Instructions
In order to view the dashboard, you will need to navigate to WEBADDRESS in your internet browser.  Once the site has loaded, you can select individual test subjects in the drop-down menu that is on the top left-hand side of the page.  The site will come pre-loaded with the information for ID# 940, and every time you select a new Test Subject ID number, the charts and Demographic Info will update based on the ID that was selected.

## Resources
In the GitHub repository for this project you will find all the resources necessary for the creation of this dashboard.  Here's a quick rundow of those files and a brief explanation:
* samples.json - the Belly Button Data Set from the Public Science Lab that contains all of the information regarding the individuals who participated in the study and the bacteria found in their belly button
* index.html - is the the webpage framework that displays the interactive dashboard in the browser
* app.js - this is the javascript file that that is running in the HTML.  in app.js, I am reading in the 'samples.json' data and then manipulating it so that it can be used to create the Plot.ly charts.

