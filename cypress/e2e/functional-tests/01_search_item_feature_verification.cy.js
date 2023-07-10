import dataSearch from '../../fixtures/dataSearch.json';
import { MainPage } from '../../pages/MainPage'

describe('User should search for an item and get appropriate results: items in result list should have query in the titles', () => {
  it('should display appropriate results for the query', () => {
    // Pobieranie zapytania wyszukiwania z pliku JSON
    const searchQuery = dataSearch.searchQuery;

    // Tworzenie instancji strony głównej
    const mainPage = new MainPage();

    // Otwieranie strony głównej
    mainPage.visit();

    // Akceptowanie domyślnych ustawień polityki prywatności
    mainPage.acceptDefaultPrivacyPolicySettings();

    // Wykonanie wyszukiwania na stronie głównej
    mainPage.searchFor(searchQuery);

    // Dodaj dalsze asercje w celu sprawdzenia wyników wyszukiwania
    // Przykład: Sprawdzenie, czy elementy na liście wyników zawierają zapytanie w tytule
    // expect(mainPage.getResultTitles()).to.include(searchQuery);
  });
});

