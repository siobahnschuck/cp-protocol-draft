// FRANTZ LAW GROUP DEMO

// 1 login in
describe('CP Direct home', () => {
  it('successfully loads', () => {
    cy.visit('https://cp-intake.herokuapp.com/flg/') 
  })
})

describe('Click log in link in NAVBAR', () => {
  it('successfully redirect to login page', () => {
    cy.contains('LOGIN').click()
    cy.url().should('include', '/sign-in')
  })
})

describe('Successfully login', () => {
  it('Credentials entered + validated + redirects to case dashboard', () => {
    cy.get('input[name=userName]').type('sylvie+flg@graveflex.com')
    cy.get('input[name=password]').type('password')
    cy.get('.AuthFormContainer__SubmitButton-sc-1fpb97y-4').click()
    // check that cases display
    cy.url().should('include', '/cases')
    //redirect
  })
})

// 2 click on the case to see the forms inside
describe("Select Case", () => {
  it("Select any case to access forms", () => {
    cy.get('.CaseListItem__Link-sc-1lzj3ej-2:first').click()
    cy.url().should('include', '/cases/')
  })
})

// 3 select ANY form / complete ++ submit forms

describe("Select form + fill out + submit", () => {
  it("Clicks title of form to redirect to form page", () => {
    cy.get('.graAWJ:first').click()
    cy.wait(500)
    cy.url().should('include', '/forms')
    cy.contains('view all cases').click()

    // 4 Fill out the pages 
    // cy.get('.css-1pcexqc-container').click()
    // cy.get('.rs__single-value').click()
    // cy.get('input[name=data[3].Answer]').type('10,000')
    // cy.get('.CheckboxField__Check-sc-1j6v60x-0').click()
    // cy.contains('Next Page').click()
    // // 5 Click "finish and submit"
    //     // ~~ form should be moved to completed tab ~~~
    // cy.contains('Finish and Submit').click()
    // cy.contains('Finish and Submit').click()
    // cy.url().should('include', '/cases') 
    // cy.contains("Great Work! All Forms have beeen completed")
  })
})
 
//4 NAVIGATE THROUGH SITE 

//CASES
describe('Select MY CASE demo', () => {
  it('successfully redirects', () => {
    cy.contains('MY FORMS').click()
        // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/
    cy.url().should('include', 'cases')
        // design of page should match the respective firm 
  })
})

//click the CONTACT US link 
describe('Select CONTACT US demo', () => {
  it('successfully redirects', () => {
    cy.contains('CONTACT US').click()
      // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/contact-us
    cy.url().should('include', 'contact-us')
      // design of page should match the respective firm 
    cy.contains('24901 Northwestern Hwy')
  })
})

// click the ABOUT OUR FIRM link 
describe('Select ABOUT OUR FIRM demo', () => {
  it('successfully redirects', () => {
    cy.contains('ABOUT').click()
      // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/about-us
    cy.url().should('include', 'about-us')
      // design of page should match the respective firm 
    cy.contains('Franz Law Firm')
  })
})

// 6 log out 
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

// 5 forgot password 
describe('Forgot Password', () => {
  it('successfully sends email with reset instructions', () => {
    //1 navigate to https://cp-intake.herokuapp.com/cpdirect/sign-in
    cy.visit('https://cp-intake.herokuapp.com/flg/sign-in')
    //2 click forgot password 
    cy.contains('Forgot Password?').click()
    //3 should redirect to https://cp-intake.herokuapp.com/cpdirect/password-reset
    cy.url().should('include', 'password-reset')
    //4 type in email for the account you are trying to reset the password for 
    cy.wait(500)
    cy.get('input[name=userName]').type('sylvie+flg@graveflex.com')
    //5 click SEND RESET REQUEST 
    // cy.contains('Send Reset Request').click()
    // cy.wait(500)
    // cy.contains('If there is an account matching this email address, a link will be sent with instructions to reset its password.')
  })
})

