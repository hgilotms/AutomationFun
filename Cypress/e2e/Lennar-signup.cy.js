describe('My Test Suite', () => {
  it('Visits the Lennar Website', () => {
    cy.visit('/')
    cy.wait(4000)
    cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
    cy.wait(2000)
    cy.get('[d="M21 21v-.923a4 4 0 00-4-4H9a4 4 0 00-4 4V21"]').click({force:true})
    cy.wait(1000)
    cy.get('[class="AuthMenuContent_authLink__lP2HC"]').click()
    cy.visit('https://auth-stage.lennar.com/')
    cy.wait(4000)
    cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
    cy.get('[d="M21 21v-.923a4 4 0 00-4-4H9a4 4 0 00-4 4V21"]').click({force:true})
    
  })
});