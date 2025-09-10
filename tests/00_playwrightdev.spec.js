import {test,expect} from '@playwright/test';
test("validate title and url",async({page})=>{

    await page.goto("https://playwright.dev/");
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl=page.url();
    const expectedTitle="Fast and reliable end-to-end testing for modern web apps | Playwright";
    const expectedUrl="https://playwright.dev/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);
})
