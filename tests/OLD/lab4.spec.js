import { test, expect } from '@playwright/test';

test('validate', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const playtitle=await page.title();
    console.log(playtitle);
     await page.goto("https://www.wikipedia.org/");
     const wikititle=await page.title();
     console.log(wikititle);
  await page.goto("https://www.google.com/");
  const googletitle=await page.title();
  console.log(googletitle);



})
