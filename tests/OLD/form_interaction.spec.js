const { test, expect } = require('@playwright/test');
test('Form interaction practice', async ({ page }) => {
// Navigate to login page
await page.goto('https://the-internet.herokuapp.com/login');
await page.waitForTimeout(5000);
// Fill username and password
await page.fill('#username', 'mohith');
await page.fill('#password', 'kjdfhvafhg');
// Click login button
await page.click('button[type="submit"]');
// Verify successful login
await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
// Take screenshot of success page
await page.screenshot({ path: 'login_success.png' });
// Click logout
await page.click('a[href="/logout"]');
// Verify logout successful
await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
});