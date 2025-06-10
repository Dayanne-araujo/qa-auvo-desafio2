// pages/ProductsPage.js

// Classe que representa a página de listagem de produtos
class ProductsPage {
  // Construtor que recebe a instância da página do Playwright
  constructor(page) {
    // Atribui a instância da página à propriedade da classe
    this.page = page;

    // Localiza o título da página (ex: "Products")
    this.pageTitle = page.locator('.title');

    // Localiza o botão/ícone do carrinho de compras
    this.cartButton = page.locator('.shopping_cart_link');
  }

  // Método assíncrono que retorna o texto do título da página
  async getTitle() {
    return await this.pageTitle.textContent();
  }

  // Método que seleciona um produto pelo nome e clica no botão de adicionar ao carrinho
  async selectProductByName(productName) {
    // Localiza o item de produto com base no nome informado
    const product = this.page.locator('.inventory_item').filter({
      // Filtra pelo elemento que contém o nome do produto
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    // Localiza e clica no botão "add to cart" dentro do produto filtrado
    await product.locator('button[data-test^="add-to-cart"]').click();
  }

  // Método que clica no ícone/botão do carrinho para ir à página do carrinho
  async goToCart() {
    await this.cartButton.click();
  }

  // NOVOS métodos para pegar preço e descrição direto na lista de produtos

  // Método que retorna o preço de um produto com base no nome
  async getProductPriceByName(productName) {
    // Localiza o item de produto com base no nome informado
    const product = this.page.locator('.inventory_item').filter({
      // Filtra pelo elemento que contém o nome do produto
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    // Retorna o texto do elemento de preço do produto
    return await product.locator('.inventory_item_price').textContent();
  }

  // Método que retorna a descrição de um produto com base no nome
  async getProductDescriptionByName(productName) {
    // Localiza o item de produto com base no nome informado
    const product = this.page.locator('.inventory_item').filter({
      // Filtra pelo elemento que contém o nome do produto
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    // Retorna o texto do elemento de descrição do produto
    return await product.locator('.inventory_item_desc').textContent();
  }
}

// Exporta a classe ProductsPage para ser usada em outros arquivos de teste
module.exports = { ProductsPage };
