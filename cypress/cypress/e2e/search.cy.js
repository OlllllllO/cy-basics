const landing = require('../pages/landing');
const results = require('../pages/results');

describe('Search Results', () => {
  it('Validates all search titles contain the search term', () => {
    const searchTerm = 'OlllllllO';
    const expectedText = new RegExp(searchTerm, 'i');

    cy.visit('/');
    landing.searchBox.should('be.focused');
    landing.searchBox.type(searchTerm);
    landing.searchButton.click();
    results.title.should('be.visible')
      .each((title) => {
        cy.wrap(title).invoke('text').should('match', expectedText);
      });
  });
});
