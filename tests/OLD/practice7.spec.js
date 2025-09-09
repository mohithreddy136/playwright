import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.amazon.in/');
  test.setTimeout(90000);
  await page.getByRole('link', { name: 'ACs' }).click();
  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
  await page.getByRole('group', { name: 'Quantity is' }).getByLabel('Delete Daikin 1.5 Ton 5 Star').click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.locator('#hmenu-canvas-background').first().click();
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: '4K TVs | Up to 24 months No' }).click();
  await page.getByRole('link', { name: 'Samsung 108 cm (43 inches) D Series Brighter Crystal 4K Vivid Pro Ultra HD' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.getByText('Added to Cart').click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('link', { name: 'Onida 108 cm (43 inch) Full' }).click();
  await page.getByRole('link', { name: 'TCL 108 cm (43 inches) 4K' }).click();
  await page.getByRole('link', { name: 'Xiaomi MI 108 cm (43 inches)' }).click();
  await page.getByRole('group', { name: '/ 11' }).getByTestId('image').click();
  await page.getByTestId('product-showcase-price').getByText('₹').click();
  await page.getByTestId('product-showcase-title').click();
  await page.getByRole('button', { name: 'Decrease quantity by one' }).click();
  await page.getByRole('button', { name: 'Delete Samsung 108 cm (43' }).click();
});