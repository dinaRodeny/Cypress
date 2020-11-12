
class loginPage
{
     
visit()
{
      cy.log('***************************************************Open_Browser*******************************************************')
      cy.visit("https://ta3limy.com/")
      return this;
}

title(value)
 {
    cy.log('***************************************************Open_Browser_successfully*******************************************************')
    const field= cy.title()
    field.should('eq',value)  
    return this;
 }
 URL(value)
 {
      cy.log('***************************************************check->URL_Indication *******************************************************')
      cy.url().should('include',value)
      return this;
 }
 scrollTo(y,x)
 {
      cy.log('***************************************************scroll the window *******************************************************')
      cy.scrollTo(y,x)
      return this;
 }
 wait(value)
 {

      cy.wait(value)
      return this;

 }

clickBtn(type,value)
{
         const field= cy.get(type)
          field.contains(value).click()
          return this;
}

clickBtn(value)
{
         const field= cy.get(value)
          field.click()
          return this;
}
doubleclick(type,value)
{
      const field= cy.get(type)
      field.contains(value).dblclick()
      return this;
}

doubleclick_(value)
{
      const field= cy.get(value)
      field.dblclick()
      return this;
}
fill_Input(Location,v)
{

        const field =cy.get(Location)
         field.should('be.visible')
         field.should('be.enabled')
         field.type(v)
         return this;
}
dropDown(type,value)
{
      const field = cy.get(type)
      field.select(value).should('have.value',value)
}
}
export default loginPage