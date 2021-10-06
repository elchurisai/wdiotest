import Page from '../page';

class GoogleSearchPage extends Page {

    get txtSearchBox() { return $('input[type="text"]') }
    get btnIAgree() { return $('#L2AGLb') }

    async searchfor(searchterm) {
        await this.btnIAgree.click();
        await this.txtSearchBox.setValue(searchterm);
        await browser.keys('Enter');
    }

    open(url) {
        return super.open(url);
    }

}
export default new GoogleSearchPage();