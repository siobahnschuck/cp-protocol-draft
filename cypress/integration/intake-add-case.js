// CREATE A NEW CASE 
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

describe('ADD CASE', () => {
  it('Successfully adds a case and fills case details', () => {
    // 3 click on the CASES tab 
    cy.contains('CASES').click()
    // cy.url().should('include', '/Index')
    // 4 click the "ADD CASE" button
    // cy.contains('Case').click()
    // cy.url().should('include', '/Case/Create')
    // // 5 create or assign plantiff 
    // //FOR CASEPACER DEMO 
    // cy.get('input[name=pp-input]').type('John Sample')
    // cy.contains('Assign').click()
    // cy.get('option[value=3297]').click()
    // cy.contains('Save').click()
    // cy.wait(200)
    // cy.contains('plantiff JOHN SAMPLE has been succesfully assigned to this case')
  })
})



    // FOR MIKE MORSE 
    // type in SYLVIA ROSA and CLICK 'assign' 

    //FOR FRANTZ LAW GROUP 

// 6 fill out thze case details 
    // case name / number : leave it blank to auto generate 
    // case type: 
      // MORSE: Automobile Collision
      // FLG: Northern California Wildfires 
      // CPDemo: Personal Injury 
    // leave all other fields blank 
// 7 CLICK SAVE 
// 8 modal should appeat which says "plantiff ROSA, SYLVIA M. "QA" has been succesfully assigned to this case"
