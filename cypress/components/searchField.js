export class SearchField {

visit = cy.visit('https://www.etsy.com')

   searchFieldSelector = '#global-enhancements-search-query';

    constructor() {
        this.searchField = cy.get(this.searchFieldSelector);

    }
    searchFor(searchQuery) {
        this.searchField.clear();
        this.searchField.type(searchQuery);
        this.searchField.type('{enter}');
    }
}
