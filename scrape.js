const request = require('request');
const cheerio = require('cheerio');

// Web Scraper Prototype
// Scrape post titles from Uwaterloo's subreddit page
request('https://www.reddit.com/r/uwaterloo/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('._eYtD2XCVieq6emjKBH3m').each((i, el) => {
        const title = $(el).text();
        console.log(title);
    });
  }
});
