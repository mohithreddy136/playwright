import {test,expect} from '@playwright/test';
test('heroku',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').type('tomsmith');
     await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#login > button').click();
    await page.waitForURL('https://the-internet.herokuapp.com/secure');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');


}
);