describe('My First Test', function()
{
    it('open_Browser', function()
     {
      
      cy.visit('https://ta3limy.com/')
      cy.title().should('eq','منصة تعليمي - منصات تعليمية - ڤودافون مصر لتنمية المجتمع')  
     })
    
     it('Click_BTTN_go_register_page', function()
     { 
        cy.get('button').contains('تسجيل حساب').click()
     })

    it('check_registration_isOPened_successfully', function()
    {
      cy.title().should('eq','منـصــة تعليمى')
      cy.scrollTo('bottom')
      cy.url().should('include','register')
    })
     
    it('Write__registration_form', function()
    {
        /*
        choose the student_reg.
         */
      cy.get('label').contains('طالب').click()
      //1-check that the firstname's input text is visible then writethe name correctly 
      cy.get('input[name=firstName]').should('be.visible').should('be.enabled').type("Dina")
       //2-check that the lastName's input text is visible then writethe name correctly 
      cy.get('input[name=lastName]').should('be.visible').should('be.enabled').type("Roudiny")
      //scroll the screen thus ,you can see the mobile number's text field
      cy.scrollTo(100, 300)  
      cy.wait(500)
      //check the phone_no. testfield is visible then write the data
      cy.get('input[name=mobileNumber]').should('be.visible').should('be.enabled').type("01222377002")
      //scroll the screen thus ,you can see the password's text field
      cy.scrollTo(100, 700)  
      cy.wait(500)
      //choose the female's checkbox
      cy.get('label').contains('أنثى').click()
      //select from dropdown menu
      cy.get('#grade').select('11').should('have.value','11')
      //write a password 
      cy.get('input[name=password]').should('be.visible').should('be.enabled').type("Dina01222377002$")
      cy.get('input[name=passwordConfirmation]').should('be.visible').should('be.enabled').type("Dina01222377002$")
      cy.scrollTo(100, 1000)  
      cy.wait(500)
       // cy.get('#termsAndConditionsCheck').check().should('be.checked').and('have.value','true')--{force: true}
       //cy.get('input[name=termsAndConditionsCheck]').check()
       //cy.get('.termsAndConditionsCheck > input').focus().type('{selectall}ItemName{termsAndConditionsCheck}');
       //cy.get('label[for=termsAndConditionsCheck]').click()
       cy.get('button').contains('تسجيل حساب').click({force: true})
       // cy.clickRecaptcha()
       //cy.get('label').contains('أنثى').click()
      
    })
     
  })
  