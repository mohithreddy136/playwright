import {test,expect} from '@playwright/test';
test('validate page title and url',async({page})=>{
    await page.goto('https://www.hollandandbarrett.com/');
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl= page.url();
    const expectedTitle="Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expectedUrl='https://www.hollandandbarrett.com/';
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);

})
