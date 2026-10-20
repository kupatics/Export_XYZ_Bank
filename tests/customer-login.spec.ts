import { expect, test } from '@playwright/test';
import { CustomerAccountPage } from '../pages/CustomerAccountPage';
import { LoginPage } from '../pages/LoginPage';

test('customer can log in and log out', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const customerAccountPage = new CustomerAccountPage(page);

  await loginPage.goto();
  await loginPage.startCustomerLogin();
  await loginPage.selectCustomer('2');
  await loginPage.login();

  await expect(customerAccountPage.logoutButton).toBeVisible();

  await customerAccountPage.logout();

  await expect(customerAccountPage.logoutButton).toBeHidden();
  await expect(loginPage.customerSelector).toBeVisible();
});
