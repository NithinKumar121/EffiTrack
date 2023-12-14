const puppeteer = require('puppeteer-core');

async function getChefUser(username) {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome',
    headless: true, 
  });

  const page = await browser.newPage();

  try {
    // Navigate to the CodeChef user profile page
    await page.goto(`https://www.codechef.com/users/${username}`, { waitUntil: 'domcontentloaded' });

    // Wait for the page to load
    await page.waitForSelector('.rating-number');

    // Extract user details
    const userDetails = await page.evaluate(() => {
    const username = document.querySelector('.user-details a').textContent.trim();
    const rating = document.querySelector('.rating-number').textContent.trim();
    const Global_rank = document.querySelector('.inline-list li:nth-child(1) a strong').textContent.trim();
    const Country_rank = document.querySelector('.inline-list li:nth-child(2) a strong').textContent.trim();

    return {
        username,
        rating,
        Global_rank,
        Country_rank,
      };
    });

    return userDetails;
  } finally {
    await browser.close();
  }
}

// Example usage
// const username = 'cibiyanna_p';
// getChefUser(username)
//   .then(userDetails => {
//     console.log('User Details:', userDetails);
// })
//   .catch(error => {
//     console.error('Error:', error);
// });


module.exports = {
    getChefUser
}