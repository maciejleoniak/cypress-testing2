export class SearchResultFilterPanel {
    
    mainFilterPanelSelector = '.main-filters';
    priceSelector = 'div[data-appears-component-name="price"]';
    shopLocationSelector = 'div[data-appears-component-name="shop_location"]';
    colorSelector = 'div[data-appears-component-name="color"]';
  
    constructor() {
      this.filterForm = cy.get(this.mainFilterPanelSelector);
      this.price = cy.get(this.priceSelector);
      this.shopLocation = cy.get(this.shopLocationSelector);
      this.color = cy.get(this.colorSelector);
    }
  
    isExpanded() {
      console.log("Verify search result filter panel have been expanded");
      this.price.should('be.visible');
      this.shopLocation.should('be.visible');
      this.color.should('be.visible');
    }
  }
  