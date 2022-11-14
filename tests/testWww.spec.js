const { expect } = require("@playwright/test");

module.exports = { testWww };

async function testWww(page) {
  const random = Math.floor(Math.random() * 100);

  await page.goto('https://niagahoster.co.id/orderhosting/24');

  await page.fill('input[name=register_domain]','testqa'+random+'.xyz');

  await page.click('[id=button-search-domain]');

  await page.click('//button[contains(text(),"Tambahkan ke Cart")]');

  await expect(page.locator('xpath=//p[contains(text(),"Premium Commodo SSL")]')).toBeVisible({ timeout: 10000 });

  await page.click('[id=checkout-button]');

  await expect(page).toHaveURL(new RegExp('/order/checkout$'));

  await expect(page.locator('//p[contains(text(),"BRI Virtual Account")]')).toBeVisible({ timeout: 10000 });
  
}