import Page from '../page';

class AmazonBasicsPage extends Page {

    get txtAmazonBasicsResults() { return $('span*=amazonbasics') }
    get chkOurBrands() { return $('li[aria-label="Our Brands"] span a div') }

    async selectOurBrands() {
        await this.chkOurBrands.click();
    }

}
export default new AmazonBasicsPage();