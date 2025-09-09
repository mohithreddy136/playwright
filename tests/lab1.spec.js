import { test, expect } from '@playwright/test';

test("validate", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const actualtitle = await page.title();
  console.log(actualtitle);

  await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps \| Playwright/);
})
