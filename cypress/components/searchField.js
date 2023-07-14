class SearchField {

   searchForFieldSelector = '#global-enhancements-search-query';
   searchListResultContainerQuerySelector = 'ol.wt-grid';
   searchForInvalidQuerySelector = '#no-results-background-Defs1002';

    searchFor(searchQuery) {
        cy.get(this.searchForFieldSelector)
        .clear()
        .type(searchQuery)
        .type('{enter}');
    };

    searchListResultsContainQuery(searchQuery) {
        cy.get(this.searchListResultContainerQuerySelector)
            .each((result) => {
                cy.wrap(result)
                    .should('contain', searchQuery);
            });
    };

    searchForInvalidQuery() {
        cy.get(this.searchForInvalidQuerySelector)
        .should('exist');
    };
};

module.exports = new SearchField();