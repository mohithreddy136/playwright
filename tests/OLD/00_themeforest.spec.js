import {test,expect} from '@playwright/test';
test("validate title and url",async({page})=>{

    await page.goto("https://themeforest.net/");
    const actualTitle=await page.title();
    console.log(actualTitle);
    const actualUrl=page.url();
    const expectedTitle="WordPress Themes & Website Templates from ThemeForest";
    const expectedUrl="https://themeforest.net/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);
})
