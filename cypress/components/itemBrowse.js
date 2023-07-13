class itemBrowse {

    priceDetail = '#listing-page-cart > div:nth-child(1)';
    pictureDetail = '.listing-page-image-carousel-component';
    descriptionDetail = '#review-preview-toggle-0';
    reviewsDetail = '.review-card';

    itemBrowserVisbility() {
        cy.get(this.priceDetail);
        cy.get(this.pictureDetail);
        cy.get(this.descriptionDetail);
        cy.get(this.reviewsDetail);
    }



}

module.exports = new itemBrowse();