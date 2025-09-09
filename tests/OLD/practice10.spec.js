import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('mohithreddy136');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mohith@136');
  
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Account').getByText('Top repositories New mohithreddy136/coding').click();
  await page.getByRole('link', { name: 'mohithreddy136/coding' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
});