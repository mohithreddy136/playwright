import {test,expect} from '@playwright/test';
test('practice',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('#content').locator('text=Dynamic Loading').click();
    await page.locator('#content').locator('text=Example 1: Element on page that is hidden').click();
    await expect(page.locator('#finish > h4')).not.toBeVisible();
    await page.locator('#start > button').click();
    await expect(page.locator('#loading')).toBeVisible();
    await page.waitForSelector('#finish > h4',{state:'visible'});
    await expect(page.locator('#finish > h4')).toHaveText('Hello World!');
    await page.goBack();
    await page.getByText('Example 2: Element rendered after the fact').click();
    await page.locator('#start > button').click();
    await page.waitForSelector('#finish > h4');
     await expect(page.locator('#finish > h4')).toHaveText('Hello World!');


})