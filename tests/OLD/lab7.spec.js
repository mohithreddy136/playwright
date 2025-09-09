import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await expect(page).toHaveText("Welcome to the-internet");


  
  
 
})
