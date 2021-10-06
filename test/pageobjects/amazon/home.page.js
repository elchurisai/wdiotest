import Page from '../page';

class HomePage extends Page {

    get lnkAmazonBasics() { return $('a[href*="amazonbasics"].see-more') }

    async clickSeemore() {
        await this.lnkAmazonBasics.click();
    }

    open(url) {
        return super.open(url);
    }

}
export default new HomePage();