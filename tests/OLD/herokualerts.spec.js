import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //await page.getByRole('button', { name: 'Click for JS Prompt' }).click().fill('mohith');
//  await page.getByText('You entered: mohith').click();
  //await expect(page.locator('#result')).toContainText('You entered: mohith');
  await page.locator('#target').press('H');
});