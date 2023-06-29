class mainPage {

    elements = {

        acceptCookieBtn: () => cy.get('[data-gdpr-single-choice-accept="true"]'),
        searchBar: () => cy.get('#global-enhancements-search-query'),
        searchResults: () => cy.get('ol.wt-grid')

    };

    clickOnCookieBtn() {
        this.elements.acceptCookieBtn().click();
    };

    fillSearchBar(searchQuery) {
        this.elements.searchBar().type(searchQuery).type('{enter}');
    };

    searchResultsContainQuery(searchQuery) {
        this.elements.searchResults()
            .each((result) => {
                cy.wrap(result)
                    .should('contain', searchQuery);
            });
    };


    searchItem = {

    };

    filterItem = {

    };

    browseItem = {

    };
}

module.exports = new mainPage();