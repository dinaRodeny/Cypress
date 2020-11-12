/// <reference types="cypress" />
import LoginPage from '../pageobject/LoginPage'
describe('My First Test', function()
{
    it('open_Browser', function()
     {

        const open=new LoginPage()
        open.visit()
        open.clickSingup()
     })
})