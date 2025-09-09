import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveText('Automation Testing Practice');
  await expect(page).toContainText('Automation');
  await expect(page).toHaveTitle('Automation testing Practice');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
  

});