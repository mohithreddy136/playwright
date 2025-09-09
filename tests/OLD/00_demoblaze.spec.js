import {test,expect} from '@playwright/test';
test("validate title and url",async({page})=>{

    await page.goto("https://demoblaze.com/");
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl=page.url();
    const expectedTitle="STORE";
    const expectedUrl="https://demoblaze.com/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);
})
