export class SearchField {

   searchFieldSelector = cy.get('#global-enhancements-search-query');

    constructor() {
        this.searchField = this.searchFieldSelector;

    }
    searchFor(searchQuery) {
        this.searchField.clear();
        this.searchField.type(searchQuery);
        this.searchField.type('{enter}');
    }
}
