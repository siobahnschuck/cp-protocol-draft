//0 GO TO HOME PAGE   
describe('CP Direct home', () => {
  it('successfully loads', () => {
    cy.visit('https://cp-intake.herokuapp.com/cpdirect/') 
  })
})
//1 login to a firm
describe('Access CasePacer Demo Login Form from Home', () => {
  it('successfully logs in user and redirects', () => {
    cy.contains('LOGIN').click()
    cy.url().should('include', '/sign-in')
  })
})

describe('Successfully login', () => {
  it('Credentials entered + validated + redirects to case dashboard', () => {
    const username = 'sylvie+demo@graveflex.com'
    const pass = 'password'
    cy.get('input[name=userName]').type('sylvie+demo@graveflex.com')
    cy.get('input[name=password]').type('password')
    cy.get('.AuthFormContainer__SubmitButton-sc-1fpb97y-4').click()
    // cy.url().should('include', '/cases')
    //redirect
  })
})

//2 click the MY CASE link 
describe('Select MY CASE demo', () => {
  it('successfully redirects', () => {
    cy.contains('MY FORMS').click()
        // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/
    cy.url().should('include', 'cases')
        // design of page should match the respective firm 
  })
})
//3 click the CONTACT US link 
describe('Select CONTACT US demo', () => {
  it('successfully redirects', () => {
    cy.contains('CONTACT US').click()
      // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/contact-us
    cy.url().should('include', 'contact-us')
      // design of page should match the respective firm 
    cy.contains('CasePacer Headquarters')
  })
})
//4 click the ABOUT OUR FIRM link 
describe('Select ABOUT OUR FIRM demo', () => {
  it('successfully redirects', () => {
    cy.contains('ABOUT').click()
      // should bring you to https://cp-intake.herokuapp.com/FIRM-HERE/about-us
    cy.url().should('include', 'about-us')
      // design of page should match the respective firm 
    cy.contains('CasePacer')
  })
})

//5 REPEAT FOR ALL FIRMS 
