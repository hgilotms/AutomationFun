describe('Search for a  Move-in-Ready Home in Dallas, Texas', () => {
    it('should visit a Lennar webpage and filters for a move in ready home in Dallas, Texas area', () => {
        cy.visit('https://assignment--lennar.netlify.app/')
        cy.wait(4000)
        cy.get('[id="onetrust-accept-btn-handler"]').trigger('click')
        cy.get('[id="searchInput"]').first().trigger('click')
        cy.get('[id="search-field"]').type('Dallas')
        cy.wait(2000)
        cy.get('ul li').contains('Dallas, TX').click();
        cy.get(':nth-child(1) > [data-testid="search-results-tab-count-index-available"]').click()
        cy.get('[data-testid="search-results-filter-more-filters"] > .bodycopyExtraSmallNew').click()
        cy.get('[data-testid="quickmoveinhomes"]').click()
        cy.get('[data-testid="show-results"]').click()
        cy.get('#search-result-list-homesite-2 > .InfoCard_wrapper__ZeC_J > .InfoCard_inner__t2t62 > .InfoCard_info__T9k_1').click()
        cy.get('.Sidebar_sidebarWrapper__iXP02 > #sidebar > #homesite-status').should('have.text',' Move-in ready ')
    })
});
