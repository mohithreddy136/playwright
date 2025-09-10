import {test,expect} from '@playwright/test';
test('heroku',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const frame= page.frameLocator('#singleframe');
    await frame.locator('body > section > div > div > div > input[type=text]').fill('hello');
    await page.getByText('Iframe with in an Iframe').click();
    const frame1=page.frameLocator('#Multiple > iframe');
    const frame2=frame1.frameLocator('iframe');
    await frame2.locator('input[type="text"]').fill('ok');


}
);