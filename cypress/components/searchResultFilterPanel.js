class  SearchResultFilterPanel {

  mainFilterPanelSelector = '.main-filters';
  priceSelector = 'div[data-appears-component-name="price"]';
  shopLocationSelector = 'div[data-appears-component-name="shop_location"]';
  colorSelector = 'div[data-appears-component-name="color"]';

  FilterPanel() {
    cy.get(this.mainFilterPanelSelector);
    cy.get(this.priceSelector);
    cy.get(this.shopLocationSelector);
    // cy.get(this.colorSelector);
  }

}

module.exports = new SearchResultFilterPanel(); 