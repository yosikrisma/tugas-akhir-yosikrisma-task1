import { LoginPage } from "./pages/login_pages";
import { DashboardPage } from "./pages/dashboard_pages";
import { AddProducts } from "./pages/add_products";
import { RemoveProduct } from "./pages/remove_product";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let addProducts = new AddProducts();
let removeProduct = new RemoveProduct();
const URL = 'https://www.saucedemo.com/';

it('Test Add Product', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce');
  loginPage.assertLogin();
  dashboardPage.sauceLabsBackpack();
  addProducts.clickAddToCart();
  addProducts.clickCart();
  addProducts.assertAddToCart();

  removeProduct.clickRemoveFromCart();
  // removeProduct.assertRemoveFromCart();
});
