import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/Login';

test('test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('textbox', { name: 'Password' }).press('Enter');

});