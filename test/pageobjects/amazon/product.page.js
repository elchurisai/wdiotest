import Page from '../page';

class ProductPage extends Page {

    get btnAddtoCart() { return $('#add-to-cart-button') }
    get txtSelectedVariant() { return $('.selection') }

    async addProductToCart() {
        await this.btnAddtoCart.click();
    }

}
export default new ProductPage();