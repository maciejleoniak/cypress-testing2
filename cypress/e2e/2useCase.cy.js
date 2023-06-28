import dataSearch from '../../dataSearch.json';


describe('User should go to invalid search page in case of invalid query', () => {

    it('go to invalid search page in case of invalid query', () => {

        const searchQuery = dataSearch.invalidQuery;

        cy.visit('https://www.etsy.com')

        cy.wait(3000);

        cy.get('div.wt-overlay__footer:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();

        cy.get('#global-enhancements-search-query').type(searchQuery).type('{enter}');

        cy.get('#no-results-background-Defs1002').should('exist');

    });
});
