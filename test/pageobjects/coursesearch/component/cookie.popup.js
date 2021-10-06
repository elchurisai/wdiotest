
class CookiePopup{

    get btnOk() { return $('#onetrust-accept-btn-handler') }

    async acceptCookies() {
        await this.btnOk.click();
    }

}
export default new CookiePopup();