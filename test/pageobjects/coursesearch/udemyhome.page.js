import Page from '../page';

class UdemyHomePage extends Page {

    get txtSearchBox() { return $('input[type="text"][name="q"]') }

    async searchfor(searchterm) {
        await this.txtSearchBox.setValue(searchterm);
        await browser.keys('Enter');
    }

}
export default new UdemyHomePage();