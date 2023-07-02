import dataSearch from '../../fixtures/dataSearch.json';
import MainPage from '../../pages/mainPage';

describe('User should search for an item and get appropriate results: items in result list should have query in the titles', () => {

  it('should display appropriate results for the query', () => {

    const searchQuery = dataSearch.searchQuery;

    cy.visit('https://www.etsy.com');

    MainPage.clickOnCookieBtn();

    MainPage.fillSearchBar(searchQuery);

    MainPage.clickOnBrowserElement();

    //price -> to change

    cy.get('li.wt-order-xs-1:nth-child(5) h3').click();
    cy.wait(4000);
    cy.window().then((win) => {
      cy.get(win.document).find('[data-buy-box-region="price"] p.wt-text-title-03').then(($element) => {
        const priceText = $element.text();
        const price = parseFloat(priceText.replace(',', '.'));
    
        expect(price).to.be.greaterThan(0);
      });
    });


  });
});
