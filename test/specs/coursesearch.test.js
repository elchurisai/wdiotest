import GoogleSearchPage from '../pageobjects/coursesearch/googlesearch.page';
import GoogleResultsPage from '../pageobjects/coursesearch/googleresults.page';
import CookiePopup from '../pageobjects/coursesearch/component/cookie.popup';
import UdemyHomePage from '../pageobjects/coursesearch/udemyhome.page';
import UdemyResultsPage from '../pageobjects/coursesearch/udemyresults.page';

describe('Searching For Course In Udemy', () => {
    it('Search For BDD Cucumber', async () => {
        await GoogleSearchPage.open('https://www.google.com/');
        await GoogleSearchPage.searchfor('Test Automation Learning');

        await GoogleResultsPage.selectUdemy();

        expect(browser).toHaveUrlContaining('udemy')

        await CookiePopup.acceptCookies();

        await UdemyHomePage.searchfor('BDD with Cucumber');

        await UdemyResultsPage.selectValue('Highest Rated');
        await UdemyResultsPage.selectHighestRatedCourse();
    });
});


