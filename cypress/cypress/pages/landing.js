class Landing {
  get searchBox() {
    return cy.get('#search_form_input_homepage');
  }

  get searchButton() {
    return cy.get('#search_button_homepage');
  }
}

module.exports = new Landing();
