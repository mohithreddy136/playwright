import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole('link',{name:"A/B Testing"}).click();
  await expect(page).toHaveTitle("The Internet");
})
