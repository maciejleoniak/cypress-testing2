import dataSearch from '../../fixtures/dataSearch.json';
import MainPage from '../../pages/mainPage';

describe('User should be able to sort a search results: lowest and highest price', () => {

    it('should be able to sort a search results', () => {

        const searchQuery = dataSearch.searchQuery;

        cy.visit('https://www.etsy.com')

        MainPage.clickOnCookieBtn();

        MainPage.fillSearchBar(searchQuery);

        MainPage.clickOnSortBtn();
    
        MainPage.chooseFilterPriceLowest();

    });
});




