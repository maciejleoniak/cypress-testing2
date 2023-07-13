class  SearchResultsSortPanel {

    sortPanelButtonSelector = 'div#sortby button.wt-menu__trigger';
  
    sortPanel() {
      cy.get(this.sortPanelButtonSelector).click();
    
    }
  
  }
  
  module.exports = new SearchResultsSortPanel(); 