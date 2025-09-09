import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByRole('link', { name: 'GUI Elements' }).hover();
  await expect(page.getByRole('link', { name: 'GUI Elements' }).)
});