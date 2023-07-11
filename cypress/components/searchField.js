class SearchField {

   searchFieldSelector = '#global-enhancements-search-query';

    searchFor(searchQuery) {
        cy.get(this.searchFieldSelector)
        .clear()
        .type(searchQuery)
        .type('{enter}');
    }
}

module.exports = new SearchField;