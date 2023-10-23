describe('Schedule a Tour of Desired Lennar Home', () => {
    it('visits a Lennar home webpage and fills tour request scheduling form ', () => {
        cy.visit('https://assignment--lennar.netlify.app/new-homes/texas/austin-central-texas/georgetown/wolf-ranch/genesis-collection/cato/4691516m52')
        cy.wait(4000)
        cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
        cy.wait(2000)
        cy.get(':nth-child(3) > .WalkthroughCTA_btnLinkSection__Ge446 > .WalkthroughCTA_btnContainer__LNHXf > .WalkthroughCTA_scheduleTourWrapper__DIdFS > [data-testid="walkthrough-schedule-tour"]').scrollIntoView().click()
        cy.wait(10000)
        cy.get('form > :nth-child(1) > .Input_root__HjVCv > .Input_label__Bcp1_').type('Lennar Home')
        cy.get(':nth-child(2) > .Input_root__HjVCv > .Input_label__Bcp1_').type('qateam1954@gmail.com')
        cy.get('.PhoneInput_root__6xCbS > .Input_root__HjVCv > .Input_label__Bcp1_').type('5124896838')
        cy.get('.select__control > .select__indicators > .select__indicator > .css-19bqh2r').last().click().type('{downarrow},{enter}')
        cy.get('[data-testid="form-submit-button"]').invoke('click')
    });
});