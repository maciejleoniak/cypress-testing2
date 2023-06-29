class mainPage{

    elements = {
  
        acceptCookieBtn: () => cy.get('[data-gdpr-single-choice-accept="true"]')

    };

    clickOnCookieBtn(){
        this.elements.acceptCookieBtn().click();
    };


    searchItem = {

    };

    filterItem = {

    };

    browseItem = {

    };    
};

module.exports = new mainPage();