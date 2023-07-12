import SearchResultsFilter from "../components/searchResultsFilterPanel";


class SearchResultsPage {

  FilterPanelSelector = '#search-filter-button';
  FilterPanelAcceptSelector = 'button.wt-btn.wt-btn--primary.wt-width-full.wt-mt-xs-3.wt-mb-xs-3.wt-mr-xs-3';
  FilterIsActiveSelector = 'div[data-active-filters]';


  ResultsFilter() {
    cy.get(this.FilterPanelSelector).click();
    SearchResultsFilter.ResultsFilterPanel();
    cy.get(this.FilterPanelAcceptSelector).click();
  }

  ResultsFilterVerifi () {
    cy.get(this.FilterIsActiveSelector).should('be.visible')
  }



  //   sortingPanel(sortingQuery) {
  //   };
}


module.exports = new SearchResultsPage();