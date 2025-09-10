import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('link', { name: 'GUI Elements' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'GUI Elements' }).click();
});