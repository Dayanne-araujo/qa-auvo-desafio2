// pages/OverviewPage.js

// Criação da classe OverviewPage, que representa a página de resumo do pedido (Order Overview)
class OverviewPage {
  
  // O construtor recebe o objeto 'page' do Playwright para interagir com o navegador
  constructor(page) {
    this.page = page;

    // Localizador do botão "Finish" que finaliza o pedido
    this.finishButton = page.locator('[data-test="finish"]');

    // Localizador dos produtos listados no resumo do pedido
    this.products = page.locator('.cart_item');

    // Localizador do subtotal dos itens no resumo
    this.subtotalLabel = page.locator('.summary_subtotal_label');

    // Localizador do valor do imposto (taxa) no resumo
    this.taxLabel = page.locator('.summary_tax_label');

    // Localizador do valor total do pedido no resumo
    this.totalLabel = page.locator('.summary_total_label');

    // Localizador da mensagem de pedido finalizado (ex: "Thank you for your order")
    this.completeMessageLabel = page.locator('.complete-header'); // Ajustar seletor conforme necessário
  }

  // Método para clicar no botão "Finish" e finalizar o pedido
  async clickFinish() {
    await this.finishButton.click();
  }

  // Método para verificar se um produto específico está visível no resumo do pedido
  async isProductVisible(productName) {
    const product = this.products.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });
    return await product.isVisible();
  }

  // Método para obter o texto do subtotal exibido no resumo
  async getSubtotal() {
    return await this.subtotalLabel.textContent();
  }

  // Método para obter o texto do imposto exibido no resumo
  async getTax() {
    return await this.taxLabel.textContent();
  }

  // Método para obter o texto do valor total exibido no resumo
  async getTotal() {
    return await this.totalLabel.textContent();
  }

  // Método para obter a mensagem exibida após finalizar o pedido
  async getCompleteMessage() {
    return await this.completeMessageLabel.textContent();
  }
}

// Exporta a classe para ser utilizada em outros arquivos (ex: nos testes)
module.exports = { OverviewPage };
