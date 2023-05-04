import * as homepage from '../support/home_page';
import * as searchpage from '../support/search_page';
import * as facetpage from '../support/facet';


describe("Navigate to Google Web page", () => {
 
    it("Visit Google page", function() {
        cy.visit('https://www.google.com/');  
    })

});