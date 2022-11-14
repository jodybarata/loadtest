const { expect } = require("@playwright/test");

module.exports = { loginFlow };

async function loginFlow(page) {
  await page.goto('https://niagahoster.co.id/');

  await page.getByRole('link', { name: 'Sign In' }).click();

  await expect(page.locator('[id=modalLoginpLabel]')).toBeVisible();

  await page.getByRole('textbox', { name: 'Email' }).fill('pradipta.el001@gmail.com');

  await page.getByPlaceholder('Masukkan Password Anda').fill('Asdf12345!');

  await page.getByRole('button', { name: 'Masuk Sekarang Juga' }).click();

  await expect(page.locator('//*[contains(text(),"Selamat Datang")]')).toBeVisible({timeout:10000});
}