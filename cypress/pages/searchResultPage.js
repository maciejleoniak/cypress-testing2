import SearchResultsFilter from "../components/searchResultsFilterPanel";
import SearchResultsSort from "../components/searchResultSortPanel";


class SearchResultsPage {

  FilterPanelSelector = '#search-filter-button';
  FilterPanelAcceptSelector = 'button.wt-btn.wt-btn--primary.wt-width-full.wt-mt-xs-3.wt-mb-xs-3.wt-mr-xs-3';
  FilterIsActiveSelector = 'div[data-active-filters]';
  SortOptionLowestPriceSelector = 'div#sortby a.wt-menu__item[data-sort-by="price_asc"]';
  SortOptionHighestPriceSelector ='div#sortby a.wt-menu__item[data-sort-by="price_desc"]'


  ResultsFilter() {
    cy.get(this.FilterPanelSelector).click();
    SearchResultsFilter.ResultsFilterPanel();
    cy.get(this.FilterPanelAcceptSelector).click();
  }

  ResultsFilterVerifi () {
    cy.get(this.FilterIsActiveSelector).should('be.visible')
  }

  SortResults () {
    SearchResultsSort.sortPanel();
    cy.get(this.SortOptionLowestPriceSelector).click();
  }

}


module.exports = new SearchResultsPage();