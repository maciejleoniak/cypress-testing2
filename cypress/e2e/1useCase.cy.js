describe('User should search for an item and get appropriate results: items in result list should have query in the titles', () => {
  
  it('should display appropriate results for the query', () => {

    const searchQuery = 'example'; 

    cy.visit('https://www.etsy.com')

    cy.get('input[name="search"]').type(searchQuery).type('{enter}');

    cy.get('.search-results li').each((result) => {
      
      cy.wrap(result).should('contain', searchQuery);
    });
  });
});