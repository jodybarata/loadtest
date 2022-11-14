const { expect } = require("@playwright/test");

module.exports = { testPanel };

async function testPanel(page) {
  //

  // Go to https://artillery.io/
  await page.goto('https://panel.niagahoster.co.id/login');
  // assert.equal(page.url(), 'https://artillery.io/pro/');
  await expect(page.locator('//*[contains(text(),"Login Member Area")]')).toBeVisible();
}