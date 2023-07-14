class  SearchResultsFilterPanel {

  mainFilterPanelSelector = '.main-filters';
  priceSelector = '#price-input-1';
  shopLocationSelector = 'label[for="shop-location-input-1"]';
  colorSelector = 'label[for="attr_1-1"]';

  ResultsFilterPanel() {
    cy.get(this.mainFilterPanelSelector);
    cy.get(this.priceSelector).click({force: true});
    cy.get(this.shopLocationSelector).click();
    // cy.get(this.colorSelector).click();
  };
};

module.exports = new SearchResultsFilterPanel(); 