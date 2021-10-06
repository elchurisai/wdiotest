import Page from '../page';

class UdemyResultsPage extends Page {

    get selectSort() { return $('select[name="sort"]') }
    get lnkHighestRated() { return $('div[class^="course-card--container"]') }

    async selectValue(value) {
        await this.selectSort.selectByVisibleText(value);
    }

    async selectHighestRatedCourse() {
        await this.lnkHighestRated.click();
    }

}
export default new UdemyResultsPage();