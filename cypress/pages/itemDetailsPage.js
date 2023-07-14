import itemBrowse from '../components/itemBrowse'

class itemDetailsPage {

    browseItemSelector = 'ol.wt-grid li:first-child a.listing-link';
    backToMainPage = '.wt-arrow-link--back';

    itemDetailsPage() {

        cy.get(this.browseItemSelector)
            .invoke('attr', 'href')
            .then(href => {
                cy.log(href);
                cy.visit(href);
            })

            // cy.get('#listing-page-cart > div:nth-child(1)').should('be.visible')

        itemBrowse.itemBrowseVisbility()


        cy.get(this.backToMainPage).click();
    };

}


module.exports = new itemDetailsPage();