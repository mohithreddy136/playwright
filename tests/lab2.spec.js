import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");


  await expect(page).toHaveTitle("Wikipedia");
  const url=await page.url();
  console.log(url);
})
