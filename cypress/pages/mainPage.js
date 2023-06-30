class mainPage {

    elements = {

        acceptCookieBtn: () => cy.get('[data-gdpr-single-choice-accept="true"]'),
        searchBar: () => cy.get('#global-enhancements-search-query'),
        searchResults: () => cy.get('ol.wt-grid'),
        searchFilter: () => cy.get('#search-filter-button'),
        shopLocationFilter: () => cy.get('label[for="shop-location-input-1"]'),
        priceFilter: () => cy.get('#price-input-1'),
        colorFilter: () => cy.get('label[for="attr_1-1"]'),
        acceptFiltersBtn: () => cy.get('button.wt-btn.wt-btn--primary.wt-width-full.wt-mt-xs-3.wt-mb-xs-3.wt-mr-xs-3'),
        activeFilters: () => cy.get('div[data-active-filters]'),
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

    chooseFilters(){
        this.elements.shopLocationFilter().click();
        this.elements.priceFilter().click({ force: true });
        this.elements.colorFilter().click();
    };

    clickAcceptChossenFiltersBtn() {
        this.elements.acceptFiltersBtn().click();
    };

    verifiactionActiveFilters() {
        this.elements.activeFilters().should('be.visible');
    };




    searchItem = {

    };

    filterItem = {

    };

    browseItem = {

    };
}

module.exports = new mainPage();