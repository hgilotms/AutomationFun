const redirectURL= 'https://auth-stage.lennar.com/login?state=hKFo2SBYWFRCS0JKT0M2ZE1GUkpEMUk4Mk44TFExQ1R1MDhuN6FupWxvZ2luo3RpZNkgc0dYbHdKbVZTSXZSSUhjei1KS09zeXZLT0N3STR4cmGjY2lk2SBMeUdMV0xRM3N4WlY2MFF3SUUxUlpFUHRha2ROWHpkcg&client=LyGLWLQ3sxZV60QwIE1RZEPtakdNXzdr&protocol=oauth2&scope=openid%20profile%20email%20offline_access%20name&connection=Auth0-LEN-Stage02&login_hint=&redirect_uri=https%3A%2F%2Fstage.lennar.com%2Faccount%2Foauth-callback%3FreturnTo%3D&response_type=code&response_mode=query&nonce=WGNhbkRra0phUkVPbFAyMUlsWFVIeDc4ZnUyLVlGd1l5UWxkSjVEWV9oZg%3D%3D&code_challenge=8nXU9I9vyS_hA9cK4nssJwZOPMi1ooh-wfc-tKAfoSY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4wLjEifQ%3D%3D'
const email= 'qateam1954@gmail.com'
const password= 'Lennar123!'
const number= '5124896838'

describe('Redirect to Lennar Account Creation webpage ', () => {
    it('should visit the Lennar Website and redirect successfully to account creation forms ', () => {
        cy.visit('/')
        cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
        cy.wait(2000)
        cy.get('[d="M21 21v-.923a4 4 0 00-4-4H9a4 4 0 00-4 4V21"]').click({ force: true })
        cy.wait(1000)
        cy.get('[class="AuthMenuContent_authLink__lP2HC"]').click()
        cy.intercept('GET', 'https://stage.lennar.com/error*', (req) => {
            req.url = 'redirectURL';
        }).as('redirectRequest');
    })


describe('Create a Lennar Account ', () => {
    it('should visit the Lennar Website and create an account', () => {
        cy.visit(redirectURL)
        cy.wait(2000)
        cy.get('p > a').should('have.text','Get started ').click()
        cy.wait(2000)
        cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
        cy.wait(2000)
        cy.get('[aria-label="Email address"]').should('be.visible').click()
        cy.wait(5000)
        cy.get('[aria-label="Email address"]').type(email)
        cy.get('[data-testid="sign-submit-button"]').click()
        cy.get('[type="password"]').type(password)
        cy.get('[name="confirmPassword"]').type(password)
        cy.get('[data-testid="sign-submit-button"]').click()
        cy.get('[name="firstName"]').type('Lennar')
        cy.get('[name="lastName"]').type('Home')
        cy.get('[data-testid="tel"]').type(number)
        cy.get('[data-testid="sign-submit-button"]').click()
        cy.get('[class="select__value-container select__value-container--has-value css-1qbivgn"]').click().type('{downarrow},{enter}')
        cy.get('[data-testid="sign-submit-button"]').click()
        
})
})
describe('Login to a Lennar Account ', () => {
    it('should visit the Lennar Website and log into account ', () => {
        cy.visit(redirectURL)
        cy.wait(2000)
        cy.get('[id="email"]').trigger('click').type(email)
        cy.get('[class="continue-button ready"]').click()
        cy.get('[type="password"]').trigger('click').type(password)
        cy.get('.continue-button').click()
        cy.get('.AuthMenuContent_root__g98Pq > .headline3New').should('have.text','Welcome back, Lennar!')
})
});
});
