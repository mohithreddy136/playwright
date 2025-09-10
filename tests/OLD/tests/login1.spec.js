// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LologinPage } from '../pages/LologinPage.js';

test.describe('OrangeHRM Login Scenarios', () => {
   
  // Test data
  const VALID_USERNAME = 'Admin';
  const VALID_PASSWORD = 'admin123';
  const INVALID_USERNAME = 'invaliduser';
  const INVALID_PASSWORD = 'wrongpassword';
  const EMPTY_STRING = '';

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LologinPage(page);
    await loginPage.navigate();
  });

  test('Successful login with valid credentials', async () => {
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await expect(loginPage.page).toHaveURL(/dashboard/);
    await expect(loginPage.page).toHaveTitle('OrangeHRM');
  });
test('Failed login with invalid username', async () => {
  await loginPage.login(INVALID_USERNAME, VALID_PASSWORD);
  await expect(loginPage.page.locator('.oxd-alert-content-text'))
    .toContainText('Invalid credentials');
});

test('Failed login with empty username', async () => {
  await loginPage.login(EMPTY_STRING, VALID_PASSWORD);
  await expect(loginPage.page.locator('.oxd-input-field-error-message'))
    .toContainText('Required');
});

test('Failed login with empty password', async () => {
  await loginPage.login(VALID_USERNAME, EMPTY_STRING);
  await expect(loginPage.page.locator('.oxd-input-field-error-message'))
    .toContainText('Required');
});


  test('Failed login with invalid password', async () => {
    await loginPage.login(VALID_USERNAME, INVALID_PASSWORD);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid credentials');
  });




  test('Login page elements visibility', async () => {
    const isLogoVisible = await loginPage.isLogoVisible();
    const isLoginButtonVisible = await loginPage.isLoginButtonVisible();
    const pageTitle = await loginPage.getPageTitle();
    expect(isLogoVisible).toBe(true);
    expect(isLoginButtonVisible).toBe(true);
    expect(pageTitle).toContain('Login');
  });

  test('Input field placeholders', async () => {
    const usernamePlaceholder = await loginPage.getUsernamePlaceholder();
    const passwordPlaceholder = await loginPage.getPasswordPlaceholder();
    expect(usernamePlaceholder).toBe('Username');
    expect(passwordPlaceholder).toBe('Password');
  });

  test('Forgot password link functionality', async () => {
    await loginPage.clickForgotPassword();
    await expect(loginPage.page).toHaveURL(/requestPasswordReset/);
    await expect(loginPage.page.locator('.orangehrm-forgot-password-title'))
      .toContainText('Reset Password');
  });

  test('Clear input fields', async () => {
    await loginPage.enterUsername('testuser');
    await loginPage.enterPassword('testpass');
    await loginPage.clearUsername();
    await loginPage.clearPassword();
const usernameValue = await loginPage.page.locator(loginPage.usernameInput).inputValue();
const passwordValue = await loginPage.page.locator(loginPage.passwordInput).inputValue();

expect(usernameValue).toBe('');
expect(passwordValue).toBe('');

  });
})
