import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.locator('#hero_user_email').click();
  await page.locator('#hero_user_email').fill('hello');
  await page.locator('[id="FormControl--:Rjahb:"]').getByRole('button', { name: 'Sign up for GitHub' }).click();
  await page.locator('#hero').getByRole('link', { name: 'Try GitHub Copilot' }).click();
  await page.goto('https://github.com/github-copilot/pro');
  await page.getByRole('link', { name: 'Codespaces Instant dev' }).click();
  await page.getByRole('link', { name: 'Issues' }).click();
  await page.locator('summary').filter({ hasText: 'What is GitHub Issues?' }).click();
  await page.locator('summary').filter({ hasText: 'What are Projects?' }).click();
});