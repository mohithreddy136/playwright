import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://www.google.com/");


  await expect(page).toHaveURL("https://www.google.com/");
  
  console.log("successfully matched url");
})
