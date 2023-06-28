import dataSearch from '../../dataSearch.json';


describe('User should be able to sort a search results: lowest and highest price', () => {

    it('should be able to sort a search results', () => {

        const searchQuery = dataSearch.searchQuery;

        cy.visit('https://www.etsy.com')

        cy.wait(1000);

        cy.get('div.wt-overlay__footer:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();

        cy.get('#global-enhancements-search-query').type(searchQuery).type('{enter}');

        cy.get('.wt-menu__trigger__label > span:nth-child(1)').click();

        cy.get('a.wt-menu__item:nth-child(3)').click();
        
    });
});

