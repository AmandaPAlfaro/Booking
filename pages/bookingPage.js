import { expect } from '@playwright/test';
class BookingPage {
    /** @type {import('@playwright/test').Page} */
    page;
    searchInput;
    firstSuggestion;
    submitButton;
    resultsText;
    fligthsTab;
    mainSearchForm;
  
    constructor(page) {
      this.page = page;
      this.searchInput = '//input[@placeholder="Where are you going?"]';
      this.firstSuggestion = '//*[@id="autocomplete-result-0"]//div[1]//div//div[1]//div[1]';
      this.submitButton = '//button[@type="submit"]';
      this.resultsText = '//*[@id="bodyconstraint-inner"]';
      this.flightsTab = '//div//*[@id="flights"]';
      this.mainPageFlights = '//*[@id="main-search-form"]';
    }
  
    async navigate() {
      await this.page.goto('https://www.booking.com/');
    }
  
    async searchDestination(city) {
      await this.page.fill(this.searchInput, city);
      await this.page.waitForTimeout(3000);
      await this.page.click(this.firstSuggestion);
      await this.page.click(this.submitButton);
    }
  
    async getSearchResultsText() {
      return await this.page.textContent(this.resultsText);
    }

    async navigatetoFlights()
    {
        await this.page.click(this.flightsTab);
        await this.page.waitForSelector(this.mainPageFlights);
    }
}
module.exports = { BookingPage };