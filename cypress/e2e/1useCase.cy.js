describe('User should search for an item and get appropriate results: items in result list should have query in the titles', () => {
  
  it('should display appropriate results for the query', () => {

    const searchQuery = 'toys'; 

    cy.visit('https://www.etsy.com')

    cy.wait(3000);
    
    cy.get('div.wt-overlay__footer:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();

    cy.get('#global-enhancements-search-query').type(searchQuery).type('{enter}');

    cy.get('ol.wt-grid').each((result) => {

      cy.wrap(result).should('contain', searchQuery);
    });
  });
});