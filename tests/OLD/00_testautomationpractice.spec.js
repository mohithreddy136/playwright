import {test,expect} from '@playwright/test';
test("validate title and url",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl=page.url();
    const expectedTitle="Automation Testing Practice";
    const expectedUrl="https://testautomationpractice.blogspot.com/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);
})
