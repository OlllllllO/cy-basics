describe('JSON Response', () => {
  it('Validate JSON response is not empty', () => {
    // Assuming test runs from a US location
    const country = 'US';
    cy.intercept('GET', 'country.json').as('country');
    cy.visit('/?q=funk&t=h_&ia=web');
    cy.wait('@country').its('response.statusCode').should('equal', 200);
    cy.get('@country').its('response.body.country').should('eq', country);
  });
});
