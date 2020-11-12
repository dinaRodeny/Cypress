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
      cy.log('***************************************************1001_ta3limy_test_Case_MainPage********************************************************')
        //open_Browser
        open
        .visit()
        //make sure  the Browser is opened successfully-> by checking the title
        .title('منصة تعليمي - منصات تعليمية - ڤودافون مصر لتنمية المجتمع')  
     })

    

     it('click_question_icon', function()
     {
       open
       .clickBtn('#help-menu')
       open
      .doubleclick('li:first','أسئلة شائعة')
      .wait(50)
      .URL('faq')
      .title('منـصــة تعليمى')
      //check that the content of the page is opened 
      .doubleclick_('#root > div > section > div > section > div:nth-child(1) > span > p')
      .scrollTo(100,1000)
      .wait(500)
      .doubleclick_('#root > div > section > div > section > div:nth-child(6) > span > p')
      //check that the bttnwill redirect to main page
      .clickBtn('#root > div > section > div > section > div:nth-child(6) > div > div > ol:nth-child(4) > li:nth-child(1) > a')
     })


     it('check_navigate_back', function()
     {
       open
       .clickBtn('#help-menu')
       open
      .doubleclick('li:first','أسئلة شائعة')
      .wait(50)
      .URL('faq')
      .title('منـصــة تعليمى')
      //check that the content of the page is opened 
      .doubleclick_('#root > div > section > div > section > div:nth-child(1) > span > p')
      .wait(100)
      cy.go('back')
      .wait(100)
     })

     it('problems', function()
     {
      open
      .scrollTo(0,0)
      .clickBtn('#help-menu')
      .wait(800)
      .doubleclick('li:second','الإبلاغ عن مشكلة')
      .fill_Input('textarea',"what shall i do?")
      .fill_Input('input[name=email]',"dina@hotmail.com")
      .clickBtn('button', 'إرسال')

     })
     after(function() 
     {
      cy.log('***************************************************before********************************************************')
      cy.end
    })
    })