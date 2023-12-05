const puppeteer = require('puppeteer');

// URL of the website you want to scrape
const url = 'https://https://geekflare.com/web-scraping-in-javascript/.com';

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the specified URL
  await page.goto(url);

  // Use the page.evaluate method to run JavaScript code in the context of the page
  const titles = await page.evaluate(() => {
    // Replace this with your actual scraping logic
    const titleNodes = document.querySelectorAll('h2');
    const titlesArray = Array.from(titleNodes).map(node => node.textContent.trim());
    return titlesArray;
  });

  // Print the scraped titles
  console.log(titles);

  // Close the browser
  await browser.close();
})();
