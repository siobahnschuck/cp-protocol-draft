//LOGOUT 
//1 log in to a firm 
describe('Login User', () => {
  it('successfully logs in user', () => {
    cy.visit('https://cp-intake.herokuapp.com/cpdirect/sign-in')
    const username = 'sylvie+demo@graveflex.com'
    const pass = 'password'
    cy.get('input[name=userName]').type('sylvie+demo@graveflex.com')
    cy.get('input[name=password]').type('password')
    cy.get('.AuthFormContainer__SubmitButton-sc-1fpb97y-4').click()
    cy.url().should('include', '/cases')
  })
})

describe('Log Out User', () => {
  it('successfully logs out user', () => {
    //2 click the profile link on the top of the header page 
    cy.contains('PROFILE').click()
    cy.wait(500)
    cy.url().should('include', '/profile')
    //3 click switch User / logout 
    cy.contains('Switch User / Sign Out').click()
    //4 should redirect to login page 
    cy.url().should('include', '/sign-in')
  })
})