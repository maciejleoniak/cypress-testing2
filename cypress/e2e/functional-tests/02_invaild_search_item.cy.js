import dataSearch from '../../fixtures/dataSearch.json';
import MainPage from '../../pages/mainPage';

describe('User should go to invalid search page in case of invalid query', () => {

  it('go to invalid search page in case of invalid query', () => {

    const searchQuery = dataSearch.invalidQuery;

    cy.visit('https://www.etsy.com');

    MainPage.clickOnCookieBtn();

    MainPage.fillSearchBar(searchQuery);

    MainPage.checkNoResultsBackground(searchQuery);

  });
});
