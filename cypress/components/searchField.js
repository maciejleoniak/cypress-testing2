class SearchField {

   searchForFieldSelector = '#global-enhancements-search-query';
   searchListResultContainerQuerySelector = 'ol.wt-grid';

    searchFor(searchQuery) {
        cy.get(this.searchForFieldSelector)
        .clear()
        .type(searchQuery)
        .type('{enter}');
    }

    searchListResultsContainQuery(searchQuery) {
        cy.get(this.searchListResultContainerQuerySelector)
            .each((result) => {
                cy.wrap(result)
                    .should('contain', searchQuery);
            });
    };


}

module.exports = new SearchField();