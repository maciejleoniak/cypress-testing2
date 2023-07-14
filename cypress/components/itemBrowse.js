class itemBrowse {

    priceDetail = '#listing-page-cart > div:nth-child(1)';
    pictureDetail = '.listing-page-image-carousel-component';
    descriptionDetail = '#review-preview-toggle-0';
    reviewsDetail = '.review-card';

    itemBrowseVisbility() {
        cy.get(this.priceDetail).should('be.visible');
        cy.get(this.pictureDetail).should('be.visible')
        cy.get(this.descriptionDetail).should('be.visible')
        cy.get(this.reviewsDetail).should('be.visible')
    };
};

module.exports = new itemBrowse();