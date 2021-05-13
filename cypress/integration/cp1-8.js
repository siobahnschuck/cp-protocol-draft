
describe('Forgot Password', () => {
  it('successfully sends email with reset instructions', () => {
    //1 navigate to https://cp-intake.herokuapp.com/cpdirect/sign-in
    cy.visit('https://cp-intake.herokuapp.com/cpdirect/sign-in')
    //2 click forgot password 
    cy.contains('Forgot Password?').click()
    //3 should redirect to https://cp-intake.herokuapp.com/cpdirect/password-reset
    cy.url().should('include', 'password-reset')
    //4 type in email for the account you are trying to reset the password for 
    cy.wait(500)
    cy.get('input[name=userName]').type('siobahn+demo@graveflex.com')
    //5 click SEND RESET REQUEST 
    cy.contains('Send Reset Request').click()
    cy.wait(500)
    cy.contains('If there is an account matching this email address, a link will be sent with instructions to reset its password.')
  })
})
 
//6 a popup should appear containing "if there is an account matching ... "
//7 check email if there is no email stop the test it FAILED 
//8 open the email 
//9 click reset password 
//10 should redirect you to a PASSWORD RESET page (same design as sign up)
//11 enter new password twice 
//12 click submit 
//13 should redirect to the MY CASES page 

//14 repeat for all the three firms 
