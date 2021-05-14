//FILL OUT INCOMPLETE FORMS 

// 1 login in
describe('CP Direct home', () => {
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
    cy.url().should('include', '/cases')
    //redirect
  })
})

// 2 click on the case to see the forms inside
describe("Select Case", () => {
  it("Select any case to access forms", () => {
    cy.get('.CaseListItem__Link-sc-1lzj3ej-2:first').click()
    cy.url().should('include', '/cases/1')
  })
})
// 3 select ANY form 
describe("Select form and fill out + submit", () => {
  it("Clicks title of form to redirect to form page", () => {
    cy.url().should('include', '/cases')
    cy.get('.graAWJ:first').click()
    cy.wait(500)
    cy.url().should('include', '/forms')
    cy.contains('view all cases').click()
    // 4 Fill out the pages 
    // cy.get('input[name=data[0].Answer]').type('Jane')
    // cy.get('input[name=data[2].Answer]').type('Doe')
    // cy.get('.input-group-text').click()
    // cy.get('.DateTimeField__Text-sc-108ncl7-2').click()
    // cy.get('input[name=data[6].Answer]').type('1234')
    // cy.get('.rs__dropdown-indicator').click()
    // cy.get('input[name=data[3].Answer]').type('10,000')
    // cy.get('.css-16pqwjk-indicatorContainer').click()
    // cy.get('input[name=data[7].Id]').click()
    // cy.contains('Next Page').click()
    // 5 Click "finish and submit"
        // ~~ form should be moved to completed tab ~~~
    // cy.contains('Finish and Submit').click()
    // cy.contains('Finish and Submit').click()
    // cy.url().should('include', '/cases') 
    // cy.contains("Great Work! All Forms have beeen completed")
  })
})

// 10 Repeat until there are no more incomplete forms 
    // PASSED WHEN: you see screen with "Great work! All forms have been completed"


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