class searchResultsPage {

  elements = {
    searchBar: () => cy.get('#global-enhancements-search-query'),
    searchResults: () => cy.get('ol.wt-grid'),
  };


  searchBar(searchQuery) {
    this.fillSearchBar(searchQuery);
    this.searchResultsContainQuery(searchQuery);

  };

  fillSearchBar(searchQuery) {
    this.elements.searchBar().type(searchQuery).type('{enter}');
  }

  searchResultsContainQuery(searchQuery) {
    this.elements.searchResults()
      .each((result) => {
        cy.wrap(result)
          .should('contain', searchQuery);
      });
  };





}



module.exports = new searchResultsPage();