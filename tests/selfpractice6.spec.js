import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/inputs');
  await page.locator('input').click();
  await page.keyboard.type('12345');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  


});