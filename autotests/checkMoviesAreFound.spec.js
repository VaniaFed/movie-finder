import 'regenerator-runtime/runtime';

import puppeteer from 'puppeteer';

describe('movies', () => {
    it('Quantity of movies should be is more than zero', async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('http://localhost:9000/search');
        const searchInputSelector = '[data-input="search-input__input"]';
        await page.waitForSelector(searchInputSelector);
        await page.click(searchInputSelector);
        await page.keyboard.type('harry potter');
        const findButtomSelector = '[data-button="search-page__button-search"]';
        await page.waitForSelector(findButtomSelector);
        await page.click(findButtomSelector);
        const moviesSelector = '.movie-card';
        await page.waitForSelector(moviesSelector);

        const moviesLength = await page.evaluate(moviesSelector => {
            return document.querySelectorAll(moviesSelector).length;
        }, moviesSelector);
        browser.close();
        expect(moviesLength).toBeGreaterThan(0);
    });
});
