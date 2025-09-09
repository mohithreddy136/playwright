import {test,expect} from '@playwright/test';
test('validate title and url',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    const actualTitle=await page.title();
    const actualUrl= page.url();
    const expectedTitle="Test Login | Practice Test Automation";
    const expectedUrl="https://practicetestautomation.com/practice-test-login/";
    expect(actualTitle).toBe(expectedTitle);
    expect(actualUrl).toBe(expectedUrl);

})