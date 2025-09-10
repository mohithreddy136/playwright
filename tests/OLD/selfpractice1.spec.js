import {test,expect} from '@playwright/test';
test('heroku',async({page})=>{
    await page.goto('https://demoqa.com/progress-bar');
    await page.locator('#startStopButton').click();
    await page.waitForSelector('#progressBar button');
    //await expect(page.locator('')).toHaveText('Reset');


}
);