import  SearchResultFilter from "../components/searchResultFilterPanel";


class SearchResultsPage {

FilterPanelSelector = '#search-filter-button'




filterPanel() {
  cy.get(this.FilterPanelSelector).click();
   SearchResultFilter.FilterPanel();
}

  

//   sortingPanel(sortingQuery) {
//   };
 }


module.exports = new SearchResultsPage();