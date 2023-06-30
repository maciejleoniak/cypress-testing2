import dataSearch from '../../fixtures/dataSearch.json';
import MainPage from '../../pages/mainPage';

describe('User should be able to filter search results: price, shop location, color', () => {

    it('should be able to filter search', () => {

        const searchQuery = dataSearch.searchQuery;

        cy.visit('https://www.etsy.com')

        MainPage.clickOnCookieBtn();

        MainPage.fillSearchBar(searchQuery);

        MainPage.clickOnSearchFilterBtn();

        MainPage.chooseFilters();

        MainPage.clickAcceptChossenFiltersBtn();

        MainPage.verifiactionActiveFilters();
    });
});

