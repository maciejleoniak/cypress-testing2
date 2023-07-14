import SearchField from "../components/searchField";

class MainPage {

  host = 'https://www.etsy.com';
  PrivacyPolicySettingsSelector = 'button[data-gdpr-single-choice-accept="true"]';

  GoToWebsite() {
    cy.visit(this.host);
  };

  PrivacyPolicySettingsAccept() {
    cy.get(this.PrivacyPolicySettingsSelector).click();
  };

  SearchBar(searchQuery) {
    SearchField.searchFor(searchQuery);
  };

  SearchBarResultCheck(searchQuery) {
    SearchField.searchListResultsContainQuery(searchQuery);
  };

  SearchBarInvalid(searchQuery) {
    SearchField.searchForInvalidQuery(searchQuery);
  };
};

module.exports = new MainPage();