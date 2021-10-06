import HomePage from '../pageobjects/amazon/home.page';
import AmazonBasicsPage from '../pageobjects/amazon/amazonbasics.page';
import AmazonBrandsPage from '../pageobjects/amazon/amazonbrands.page';
import ProductPage from '../pageobjects/amazon/product.page';
import HeaderComp from '../pageobjects/amazon/components/header.comp';

describe('Add Amazon Basics Product To The Cart', () => {
    it('Add Product To Cart', async () => {
        await HomePage.open('https://www.amazon.com/ref=nav_logo');
        await HomePage.clickSeemore();

        await expect(AmazonBasicsPage.txtAmazonBasicsResults).toBeDisplayed();
        await AmazonBasicsPage.selectOurBrands();

        await AmazonBrandsPage.selectProduct();

        await expect(ProductPage.btnAddtoCart).toBeDisplayed();
        await expect(ProductPage.txtSelectedVariant).toHaveTextContaining('Black');
        await ProductPage.addProductToCart();

       // await PopOverPage.closePopOver();

        await expect(HeaderComp.txtCartCount).toHaveText('1');
    });
});


