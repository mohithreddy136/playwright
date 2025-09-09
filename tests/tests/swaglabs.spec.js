// tests/products.spec.js
import { test,expect } from '@playwright/test';
import { LoginSwag } from '../pages/LoginSwag.js';
import { Products } from '../pages/Products.js';
import {Cart} from '../pages/Cart.js';

test.describe('Project 2', () => {
  test('End-to-End Product Flow', async ({ page }) => {
    const loginpage = new LoginSwag(page);
    const productspage = new Products(page);
    const cartpage=new Cart(page);
    await loginpage.navigate();
    await loginpage.userLogin('standard_user','secret_sauce');
    await productspage.addProducts();
    await productspage.goToCart();
    await expect(cartpage.cartList).toHaveCount(2);


  });
});
