  
/// <reference types="cypress" />
import LoginPage from '../pageobject/LoginPage'

  describe('Hooks', function()
   {
     //create new object from loginPage's class
    const open=new LoginPage()
    before(function() 
    {
     cy.log('***************************************************Load data********************************************************')
     cy.fixture('example').then(function(data)
     {
        this.key=data
     })
    })

 
     it('open_Browser', function()
     {
      cy.log('***************************************************2001_ta3limy_test_Case_MainPage********************************************************')
        //open_Browser
        open
        .visit()
        //make sure  the Browser is opened successfully-> by checking the title
        .title('منصة تعليمي - منصات تعليمية - ڤودافون مصر لتنمية المجتمع')  
     })

     it('press_signup_bttn', function()
     {
      cy.log('***************************************************2003_ta3limy_test_Case_RegisterPage********************************************************')
      open
      .clickBtn('button', 'تسجيل حساب')
      .wait(10)
     })

     it('check_registration_isOPened_successfully', function()
     {
        cy.log('***************************************************2004_ta3limy_test_Case_RegisterPage********************************************************')
        open
        .title('منـصــة تعليمى')
        .URL('register')  
     })

     it('user type', function()
     {
        cy.log('***************************************************2005_ta3limy_test_Case_RegisterPage********************************************************')
        open
        .clickBtn('label','طالب')
       
     })

     it('fillFullName&Mobile', function()
     {
        cy.log('***************************************************2006_ta3limy_test_Case_RegisterPage********************************************************')
        open
        .fill_Input('input[name=firstName]',"d")  
        .fill_Input('input[name=lastName]',"roudiny")  
        .scrollTo(100,300)
        .wait(500)
        .fill_Input('input[name=mobileNumber]',"01222377002")  
      
     })
     it('Gender', function()
     {
      cy.log('***************************************************2007_ta3limy_test_Case_RegisterPage********************************************************')
     //choose the female's checkbox
     open 
     .clickBtn('label', 'أنثى')
     })     

     it('Grade', function()
     {
      cy.log('***************************************************2008_ta3limy_test_Case_RegisterPage********************************************************')
      open
      .dropDown('#grade','11')
     })   
    
     it('password', function()
     {
      cy.log('***************************************************2009_ta3limy_test_Case_RegisterPage********************************************************')
      open
      .scrollTo(100,1000)
      .wait(200)  
      .fill_Input('input[name=password]',"Dina01222377002$")
      .fill_Input('input[name=passwordConfirmation]',"Dina01222377002$")
     })
     it('conditions', function()
     {
       cy.log('***************************************************2010_ta3limy_test_Case_RegisterPage********************************************************')
    //cy.get('#termsAndConditionsCheck').check().should('be.checked').and('have.value','true')--{force: true}
   open
    .scrollTo(100,1000)
    .wait(200)  
    cy.get('input[name=termsAndConditionsCheck]').focus().type('{selectall}' +termsAndConditionsCheck)
    cy.focused().type('{enter}')

     })   
    

     it('submit', function()
     {
      cy.log('***************************************************2011_ta3limy_test_Case_RegisterPage********************************************************')
      open
      .clickBtn('button', 'تسجيل حساب')
     })

     after(function() 
     {
      cy.log('***************************************************before********************************************************')
      cy.end
    })
  })