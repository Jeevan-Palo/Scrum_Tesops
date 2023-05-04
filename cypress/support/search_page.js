const search_Result_Txt_Msg = '#searchMessageContainer > .search-result-txt-section > span'

export function verifySearchResult_Msg(searchResult_text){
    cy.get(search_Result_Txt_Msg).invoke('text')
        .should('contain', searchResult_text);
}