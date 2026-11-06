import { $, $$ } from '@wdio/globals'
import Base from './baseSE.js';


class SortMenu extends Base {
    
    get sortSelected () {
        return $('#sort-selected-text');
    }

    get sortOptions () {
        return $$('[data-sort]');
    }
    
    get sortLabel () {
        return $$('#active-sort-label');
    }

    sortData={
        options: ["default", "price-asc", "price-desc", "name-asc", "name-desc", "on-sale", "new"],
        results: ["Featured", "Price: Low to High", "Price: High to Low", "Name: A → Z", "Name: Z → A", "On sale", "New arrivals"],
        results2: ["", "Price: Low to High", "Price: High to Low", "Name: A → Z", "Name: Z → A", "On sale", "New arrivals"]
    }
    
    async dropdown (dropdownOption) {
        await this.sortSelected.click();
        const option = await $(`[data-sort="${dropdownOption}"]`);
        await option.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

export default new SortMenu();
