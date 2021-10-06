import Page from '../page';

class GoogleResultsPage extends Page {

    get lnkUdemy() { return $('h3*=Udemy') }

    async selectUdemy() {
        await this.lnkUdemy.click();
    }

}
export default new GoogleResultsPage();