class searchResultsPage {

  elements = {
    searchBar: () => cy.get('#global-enhancements-search-query'),
    searchResults: () => cy.get('ol.wt-grid'),
  };


  searchBar(searchQuery) {
    this.fillSearchBar(searchQuery);
    this.searchResultsVerification(searchQuery);
  };
  fillSearchBar(searchQuery) {
    this.elements.searchBar().type(searchQuery).type('{enter}');
  };
  searchResultsVerification(searchQuery) {
    this.elements.searchResults()
      .each((result) => {
        cy.wrap(result)
          .should('contain', searchQuery);
      });
  };


  filterPanel(filterQuery) {
  };

  sortingPanel(sortingQuery) {
  };





}



module.exports = new searchResultsPage();