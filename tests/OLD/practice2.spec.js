import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('hello');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('hello@ex.com');
  await page.getByRole('radio', { name: 'Gender:' }).check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).click();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill('8874784777');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('2025-09-01');
  await page.getByRole('textbox', { name: 'Subjects:' }).click();
  await page.getByRole('textbox', { name: 'Subjects:' }).click();
  await page.getByRole('textbox', { name: 'Subjects:' }).fill('mohith');
  await page.locator('#practiceForm div').filter({ hasText: 'Sports' }).nth(3).click();
  await page.getByRole('checkbox', { name: 'Hobbies:' }).check();
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('button', { name: 'Picture: State and City' }).click();
  await page.getByRole('button', { name: 'Picture: State and City' }).setInputFiles('lab1.png');
  await page.getByRole('textbox', { name: 'Currend Address' }).click();
  await page.getByRole('textbox', { name: 'Currend Address' }).fill('mffnmjk ,jfbwnfjj,fnkewnf');
  await page.locator('#state').selectOption('Haryana');
  await page.locator('#city').selectOption('Agra');
  await page.getByRole('button', { name: 'Login' }).click();
});