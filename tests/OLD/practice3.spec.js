import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.locator('._Y29ud_bxcGridColumn_J5gfU._Y29ud_bxcGridColumn12Of12_1hOQf > .celWidget > ._Y29ud_bxcGridImage_mukPG > a').first().click();
  await page.locator('#sobe_d_b_ms_4_1 > .sl-sobe-carousel-sub-card-image > .grid-container > .grid > div:nth-child(5) > a').click();
  await page.getByRole('link', { name: 'Prime', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('slider', { name: 'Minimum price' }).fill('190');
  await page.getByRole('button', { name: 'Go - Submit price range' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: 'MSI Titan 18 HX AI,Intel' }).locator('a').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('radio', { name: '11+' }).click();
});