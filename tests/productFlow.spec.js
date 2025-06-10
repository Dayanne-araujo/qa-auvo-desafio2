const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OverviewPage } = require('../pages/OverviewPage'); // Importar OverviewPage

// Teste que valida o fluxo completo de compra no desafio Auvo
test('Fluxo completo de compra - Auvo Challenge', async ({ page }) => {
  // Instancia as classes de página, passando o objeto 'page' do Playwright
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navega para a página de login
  await loginPage.goto();

  // Realiza o login com usuário e senha válidos
  await loginPage.login('standard_user', 'secret_sauce');

  // Valida se o título da página de produtos está correto
  const pageTitle = await productsPage.getTitle();
  expect(pageTitle).toContain('Products');

  // Define o nome do produto que será testado
  const productName = 'Sauce Labs Backpack';

  // Obtém e valida o preço do produto selecionado
  const productPrice = await productsPage.getProductPriceByName(productName);
  expect(productPrice).toBe('$29.99');

  // Obtém e valida a descrição do produto
  const productDescription = await productsPage.getProductDescriptionByName(productName);
  expect(productDescription).toContain('carry.allTheThings()');

  // Seleciona o produto pelo nome
  await productsPage.selectProductByName(productName);

  // Navega para a página do carrinho
  await productsPage.goToCart();

  // Verifica se o produto está presente no carrinho
  const isInCart = await cartPage.isProductInCart(productName);
  expect(isInCart).toBeTruthy();

  // Navega para a página de checkout
  await cartPage.goToCheckout();

  // Preenche o formulário de checkout com dados fictícios
  await checkoutPage.fillCheckoutForm('Day', 'Souza', '12345');

  // Clica no botão para continuar o processo de checkout
  await checkoutPage.clickContinue();

  // Instancia a página de resumo do pedido
  const overviewPage = new OverviewPage(page); // ✅ Usa OverviewPage agora

  // Clica no botão para finalizar o pedido
  await overviewPage.clickFinish();

  // Obtém a mensagem exibida após finalizar o pedido e valida seu conteúdo
  const completeMessage = await overviewPage.getCompleteMessage();
  expect(completeMessage).toContain('Thank you for your order');
});
