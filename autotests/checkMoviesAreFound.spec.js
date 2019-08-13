import 'regenerator-runtime/runtime';

const puppeteer = require('puppeteer');

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

        const resultMovies = await page.evaluate(moviesSelector => {
            const movies = Array.from(
                document.querySelectorAll(moviesSelector)
            );
            return movies.map(movie => {
                return Promise.resolve(movie);
            });
        }, moviesSelector);
        browser.close();
        expect(resultMovies.length).toBeGreaterThan(0);
    });
});
