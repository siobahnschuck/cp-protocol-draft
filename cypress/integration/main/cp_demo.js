// CASEPACER DEMO  

// 1 LOG IN 
describe('CP Direct HOME', () => {
  it('successfully loads', () => {
    cy.visit('https://cp-intake.herokuapp.com/cpdirect/') 
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
    cy.get('input[name=userName]').type('sylvie+demo@graveflex.com')
    cy.get('input[name=password]').type('password')
    cy.get('.AuthFormContainer__SubmitButton-sc-1fpb97y-4').click()
    // check that cases display and correct URL 
    cy.url().should('include', '/cases')
  })
})

// 2 SELECT CASE
describe("Select Case to view forms", () => {
  it("TEST SCENARIO 2.3", () => {
    cy.get('.CaseListItem__Link-sc-1lzj3ej-2:first').click()
    cy.url().should('include', '/cases/')
  })
})

// 3 SELECT FORM

describe("Select form + fill out + submit", () => {
  it("TEST SCENARIO 2.3", () => {
    cy.get('.graAWJ:first').click()
    cy.wait(500)
    cy.url().should('include', '/forms')
    cy.contains('view all cases').click()
  })
})
 
//4 NAVIGATE THROUGH SITE 

// Click the MY FORMS nav el
describe('Select MY FROMS in nav', () => {
  it('TEST SCENARIO 2.7', () => {
    cy.contains('MY FORMS').click()
    cy.url().should('include', 'cases')
    cy.contains("Select a Case")
  })
})

//click the CONTACT US nav el
describe('Select CONTACT US in nav', () => {
  it('TEST SCENARIO 2.7', () => {
    cy.contains('CONTACT US').click()
    cy.url().should('include', 'contact-us')
    // VERIFY CP INFO 
    cy.contains('+1 317-218-4715')
    cy.contains('sales@casepacer.com')
    cy.contains('8888 Keystone Crossing')
    // TEST CONTACT FORM 
    cy.get('input[name=firstName]').type('John')
    cy.get('input[name=lastName]').type('Test')
    cy.get('input[name=email]').type('siobahn+test@graveflex.com')
    cy.get('input[name=phoneNumber').type('702-449-8904')
    cy.get('textarea[name=textBody]').type('automated test run')
    cy.get('.contact-us__ButtonTextContainer-bavewd-35').click()
    cy.wait(500)
  })
})

// click the ABOUT OUR FIRM nav el 
describe('Select ABOUT OUR FIRM demo', () => {
  it('TEST SCENARIO 2.7', () => {
    cy.contains('ABOUT').click()
    cy.url().should('include', 'about-us')
    cy.contains('CasePacer')
  })
})

// 6 LOG OUT
describe('Log Out User', () => {
  it('TEST SCENARIO 2.', () => {
    cy.contains('PROFILE').click()
    cy.wait(500)
    cy.url().should('include', '/profile')
    cy.contains('Switch User / Sign Out').click()
    // validate redirect to log in page 
    cy.url().should('include', '/sign-in')
  })
})

// 5 FORGOT PASSWORD 
describe('Forgot Password', () => {
  it('TEST SCENARIO 2.x', () => {
    cy.visit('https://cp-intake.herokuapp.com/cpdirect/sign-in')
    cy.contains('Forgot Password?').click()
    cy.url().should('include', 'password-reset')
    cy.wait(500)
    cy.get('input[name=userName]').type('sylvie+demo@graveflex.com')
// SEND RESET REQUEST  
    // cy.contains('Send Reset Request').click()
    // cy.wait(500)
    // cy.contains('If there is an account matching this email address, a link will be sent with instructions to reset its password.')
  })
})

