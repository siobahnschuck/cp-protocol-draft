//REMOVING A USER FROM A CASE 
//1 log in to a firm on intake.casepacer.com
describe('Login as DEMO_Attorney', () => {
  it('Logs in Successfully', () => {
    // 1 navigate to intake.casepacer.com
    cy.visit('https://intake.casepacer.com/')
    // 2 sign into one of the firms 
    cy.get('input[name=username]').type('Demo_Attorney')
    cy.get('input[name=password]').type('GraveFlexAdmin|blinded by the light')
    cy.get('.btn').click()
    cy.wait(2000)
  })
})
//2 navigate to the mobile intake forms 
//3 open the manage clients modal 
//4 check for users 
    // no users ? add one 
//5 click the trash can to remove 
    // the user should dissappear from the list 
//6 test to make sure this actually removed the user 
    // navigate to the appropriate firm and try logging in with the deleted email 
