import {test,expect} from '@playwright/test';
test('heroku',async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    // await page.locator('#username').fill('tomsmith');
    //  await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#alertButton').click();
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        dialog.accept();

    });
   // await page.locator()
    // await page.waitForURL('https://the-internet.herokuapp.com/secure');
    // await expect(page.locator('#flash')).toContainText('You logged into a secure area!');


}
);