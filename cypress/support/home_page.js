const searchbar = '#inputValEnter'
const searchButton = '.searchTextSpan'

export function enterValue_Searchbar(searchkeyword){
    cy
        .get(searchbar)
        .type(searchkeyword)
        .should("have.value", searchkeyword);
        cy.get(searchButton).click();
}
  