const discount_Facet_filter = '[data-displayname="Discount %"] > .filter-content > .filter-inner'
const searchButton = '.searchTextSpan'

export function discount_filter(facet_Value){
    cy.get(discount_Facet_filter)
        .contains(facet_Value).should('be.visible').click({force : true});
}
  