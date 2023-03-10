class Results {
  get title() {
    return cy.get('[data-testid="result-title-a"]');
  }
}

module.exports = new Results();
