import Page from '../page';

class PopOverPage extends Page {

    get iconClosePopOver() { return $('#attach-close_sideSheet-link') }

    async closePopOver() {
        await this.iconClosePopOver.click();
    }

}
export default new PopOverPage();