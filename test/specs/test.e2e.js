import { expect } from '@wdio/globals'
import SortMenu from '../pageobjects/sortMenu.js'


describe('Dropdown selection', () => {
    it('should select a sort option', async () => {
        for (let i = 0; i < SortMenu.sortData.options.length; i++) {
            await SortMenu.open()
            await SortMenu.dropdown(SortMenu.sortData.options[i])
            await expect(SortMenu.sortSelected).toHaveText(SortMenu.sortData.results[i])
            await expect(SortMenu.sortLabel).toHaveText(SortMenu.sortData.results2[i])
        }
    })
})



