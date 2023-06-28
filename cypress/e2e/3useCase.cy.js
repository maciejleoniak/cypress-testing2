import dataSearch from '../../dataSearch.json';


describe('User should be able to filter search results: price, shop location, color', () => {

    it('should be able to filter search', () => {

        const searchQuery = dataSearch.searchQuery;

        cy.visit('https://www.etsy.com')

        cy.wait(1000);

        cy.get('div.wt-overlay__footer:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();

        cy.get('#global-enhancements-search-query').type(searchQuery).type('{enter}');

        cy.get('#search-filter-button').click();

        //shop location filter
        cy.get('div.wt-menu__body:nth-child(1) > div:nth-child(2) > label:nth-child(2)').click();
        // price filter
        cy.get('.main-filters > div:nth-child(7) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > label:nth-child(2)').click();
        // color filter
        cy.get('fieldset.wt-mb-xs-2:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)').click();
        // search btn 
        cy.get('button.wt-btn--primary:nth-child(3)').click();
        

    })
});

