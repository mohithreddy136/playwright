import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(150000);
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'ACs' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: 'Best sellerin Split-System' }).locator('a').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Daikin-Inverter-Display-Technology-MTKL50U/dp/B0BK1KS6ZD/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.LpujZ4uISPUK8sa_6yNGVY-3zoi-I7NYK-eHPsE7wGDDe5gR4wiXFNOAqexYtHRwhktNh6cntiQQEYFc77y5dKxhzsTGR6XUANr2bNebuyQ28ty8K_dgYeFADZOxQMRbITEB3fs3MKDwWTyhme5pgB5srQq05CwN0ljP3TagJrzdkqw-aQE1T8b1YnxpBTuOuC06nuF1TFg_qMSOq8aaHXDT-NQjPHQ2yMznNYePzO2U3NFi5BDfTFJX4z6NEfEnJdYEfvwRhpUpdjZLNF5hHh9Gh8BmSQQL_lNyy5Ud6lQ.TzLOfcc6asnRVLN-Zno0IBVgTj0aVDd__RKCDiWljg0&dib_tag=se&pd_rd_r=6cfe1b12-f046-456b-8393-fbad2ca4b584&pd_rd_w=WLz5u&pd_rd_wg=3S9BD&qid=1756891236&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1&th=1');
  await page1.getByRole('button', { name: 'Add to Cart' }).click();
  await page1.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
});