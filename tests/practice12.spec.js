import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByText('Date of Birth:').click({
    button: 'right'
  });
  await page.getByText('Date of Birth:').click();
  await page.getByText('Email:').click();
});