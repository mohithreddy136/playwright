import {test,expect} from '@playwright/test';
test("validate title and url",async({page})=>{

    await page.goto("https://demo.opencart.com/");
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl=page.url();
    const expectedTitle="Your Store";
    const expectedUrl="https://demo.opencart.com/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);
})
