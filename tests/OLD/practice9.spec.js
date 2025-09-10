import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('link', { name: 'Udemy Courses' }).click();
  await page.goBack();
  await page.goForward();
  await page.reload();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('mohith');
  await page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Male' }).nth(1).click();
  await page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Monday' }).nth(1).click();
  await page.getByText('Days: Sunday Monday Tuesday').click();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '10' }).click();
  await page.locator('.fauxborder-left.main-fauxborder-left').click();
  await page.getByLabel('Sorted List:').selectOption('deer');
  
});