# Cypress
//kindly note:i face a problem to handle the recaptcha 
 
plz go and add this script in "package.json" so you can run in a different browsers

   /*************************************************************************************************************************/
  "scripts": {
    "test": "./node_modules/.bin/cypress run --headed",
    "test_Firefox": "./node_modules/.bin/cypress run --browser firefox",
    "test_Edge": "./node_modules/.bin/cypress run --browser edge",
    "test_Electron": "./node_modules/.bin/cypress run --browser electron",
    "test_Chromium": "./node_modules/.bin/cypress run --browser chromium"
    /***************************************************************************************************************/
    
    you can also use viewport to make sure the website run with high quality in different screen's size
    for example:
    cy.viewport('iphone-6')
    https://docs.cypress.io/api/commands/viewport.html#Syntax
