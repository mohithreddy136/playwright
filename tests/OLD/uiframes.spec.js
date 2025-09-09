import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('frame').first().contentFrame().getByRole('textbox').click();
  await page.locator('frame').first().contentFrame().getByRole('textbox').fill('hello');
  await expect(page.locator('frame').first().contentFrame().getByRole('textbox')).toHaveValue('hello');
  await page.locator('#target').press('H');
});