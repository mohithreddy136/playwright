import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).click();
  await page.getByRole('textbox', { name: 'Search for products, brands' }).fill('headphone');
  await page.getByRole('textbox', { name: 'Search for products, brands' }).press('Enter');
  await page.getByText('Sort by :').click();
  await page.getByText('Price: High to Low').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Quiet Comfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio BOSE Sizes: Onesize Rs. 35900 Only Few Left!', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'Delivery Options' }).locator('span').click();
});