class mainPage {

    elements = {

        //cookies acceptance
        acceptCookieBtn: () => cy.get('[data-gdpr-single-choice-accept="true"]'),

        searchFilter: () => cy.get('#search-filter-button'),
        noResultsBackground: () => cy.get('#no-results-background-Defs1002'),
        //filter options
        shopLocationFilter: () => cy.get('label[for="shop-location-input-1"]'),
        priceFilter: () => cy.get('#price-input-1'),
        colorFilter: () => cy.get('label[for="attr_1-1"]'),
        acceptFiltersBtn: () => cy.get('button.wt-btn.wt-btn--primary.wt-width-full.wt-mt-xs-3.wt-mb-xs-3.wt-mr-xs-3'),
        activeFilters: () => cy.get('div[data-active-filters]'),
        //sort options
        sortBtn: () => cy.get('div#sortby button.wt-menu__trigger'),
        lowestPriceSort: () => cy.get('div#sortby a.wt-menu__item[data-sort-by="price_asc"]'),
        higestPriceSort: () => cy.get('div#sortby a.wt-menu__item[data-sort-by="price_desc"]'),
        //browser options
        findBrowserElement: () => cy.get('ol.wt-grid li:first-child a.listing-link'),
        backToMainPage: () => cy.get('.wt-arrow-link--back'),
        priceDetail: () => cy.get('#listing-page-cart > div:nth-child(1)'),
        pictureDetail: () => cy.get('.listing-page-image-carousel-component'),
        descriptionDetail: () => cy.get('#review-preview-toggle-0'),
        reviewsDetail: () => cy.get('.review-card'),

    };

    //cookies acceptance
    clickOnCookieBtn() {
        this.elements.acceptCookieBtn().click();
    };


    //invalid search results verification
    checkNoResultsBackground() {
        this.elements.noResultsBackground().should('exist');
    };

    //search filter verification
    clickOnSearchFilterBtn() {
        this.elements.searchFilter().click();
    };

    chooseFilters() {
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

    //sorting
    clickOnSortBtn() {
        this.elements.sortBtn().click();
    };

    chooseFilterPriceLowest() {
        this.elements.lowestPriceSort().click();
    };

    //browser elements
    clickOnBrowserElement() {
        this.elements.findBrowserElement().invoke('attr', 'href')
            .then(href => {
                cy.log(href);
                cy.visit(href);
            });
    };

    clickBackToMainPage() {
        this.elements.backToMainPage().click();
    };

    priceDetailVisibility() {
        this.elements.priceDetail().should('be.visible');
    };

    pictureDetailVisibilty() {
        this.elements.pictureDetail().should('be.visible');
    };

    descriptionDetailVisibility() {
        this.elements.descriptionDetail().should('be.visible');
    };

    reviewsDetailVisibility() {
        this.elements.reviewsDetail().should('be.visible');
    };
    
    detailVisibility () {
        this.priceDetailVisibility();
        this.pictureDetailVisibilty();
        this.descriptionDetailVisibility();
        this.reviewsDetailVisibility();
    };
}

module.exports = new mainPage();