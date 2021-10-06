import Page from '../page';

class AmazonBrandsPage extends Page {

    get lnkTwoSliceToaster() { return $('*=Amazon Basics 5-Shelf Adjustable') }

    async selectProduct() {
        await this.lnkTwoSliceToaster.click();
    }

}
export default new AmazonBrandsPage();