class mainPage {

    elements = {

        acceptCookieBtn: () => cy.get('[data-gdpr-single-choice-accept="true"]'),
        searchBar: () => cy.get('#global-enhancements-search-query'),
        searchResults: () => cy.get('ol.wt-grid'),
        searchFilter: () => cy.get('#search-filter-button'),
        shopLocationFilter: () => cy.get(''),
        priceFilter: () => cy.get(''),
        colorFilter: () => cy.get(''),
        acceptFilters: () => cy.get(''),
        noResultsBackground: () => cy.get('#no-results-background-Defs1002')


    };

    //cookies acceptance
    clickOnCookieBtn() {
        this.elements.acceptCookieBtn().click();
    };

    //search query
    fillSearchBar(searchQuery) {
        this.elements.searchBar().type(searchQuery).type('{enter}');
    };

    //search results verification
    searchResultsContainQuery(searchQuery) {
        this.elements.searchResults()
            .each((result) => {
                cy.wrap(result)
                    .should('contain', searchQuery);
            });
    };

    //invalid search results verification
    checkNoResultsBackground() {
        this.elements.noResultsBackground().should('exist');
    };

    //search filter verification
    clickOnSearchFilterBtn() {
        this.elements.searchFilter().click();
    };
    clickAcceptChossenFiltersBtn(searchLocation, searchPrice, searchColor) {
        this.elements.shopLocationFilter(searchLocation).click();
        this.elements.priceFilter(searchPrice).click();
        this.elements.colorFilter(searchColor).click();
        this.elements.acceptFilters().click();
    };





    searchItem = {

    };

    filterItem = {

    };

    browseItem = {

    };
}

module.exports = new mainPage();