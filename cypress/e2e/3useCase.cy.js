import dataSearch from '../../dataSearch.json';


describe('User should be able to filter search results: price, shop location, color', () => {

    it('should be able to filter search', () => {

        const searchQuery = dataSearch.searchQuery;

        cy.visit('https://www.etsy.com')

        cy.wait(3000);

        cy.get('div.wt-overlay__footer:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();

        cy.get('#global-enhancements-search-query').type(searchQuery).type('{enter}');

        cy.get('#search-filter-button').click();

        // price filter
        cy.get('#search-filter-form > div > div.main-filters > div:nth-child(6) > fieldset > div > div > div:nth-child(3)').click();
        //shop location filter
        cy.get('#search-filter-form > div > div.main-filters > div:nth-child(3) > fieldset > div > div > div:nth-child(2)').click();
        // color filter
        cy.get('#search-filter-form > div > div.main-filters > fieldset > div > div:nth-child(1) > div:nth-child(1) > div').click();




    })
});

