import {test,expect} from '@playwright/test';
test('heroku',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    await page.locator('#start > button').click();
    await page.waitForSelector('#finish > h4');
    await expect(page.locator('#finish > h4')).toHaveText('Hello World!');


}
);