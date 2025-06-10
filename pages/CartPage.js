// Classe que representa a página do carrinho de compras
class CartPage {
  // Construtor que recebe a instância da página do Playwright
  constructor(page) {
    // Atribui a instância da página à propriedade da classe
    this.page = page;

    // Localiza o botão de "Checkout" usando o seletor de atributo data-test
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  // Método que verifica se um produto está presente no carrinho pelo nome
  async isProductInCart(productName) {
    // Localiza o item do carrinho que contém o nome do produto especificado
    const product = this.page.locator('.cart_item').filter({
      // Filtra pelos itens que possuem o nome do produto
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    // Retorna true se o produto estiver visível no carrinho
    return await product.isVisible();
  }

  // Método que clica no botão para ir para a etapa de checkout
  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

// Exporta a classe CartPage para que possa ser usada em outros arquivos de teste
module.exports = { CartPage };
