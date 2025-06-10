// pages/ProductDetailsPage.js

// Classe que representa a página de detalhes do produto selecionado
class ProductDetailsPage {
  // Construtor da classe que recebe a instância da página (page) do Playwright
  constructor(page) {
    // Atribui a instância da página à propriedade da classe
    this.page = page;

    // Localiza o elemento do título do produto pela classe CSS específica
    this.title = page.locator('.inventory_details_name');

    // Localiza o elemento do preço do produto pela classe CSS específica
    this.price = page.locator('.inventory_details_price');

    // Localiza o elemento da descrição do produto pela classe CSS específica
    this.description = page.locator('.inventory_details_desc');

    // Localiza o botão de "Adicionar ao carrinho" usando o seletor de atributo data-test
    this.addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  // Método assíncrono que retorna o texto do título do produto
  async getTitle() {
    // Obtém o conteúdo de texto do elemento de título
    return await this.title.textContent();
  }

  // Método assíncrono que retorna o texto do preço do produto
  async getPrice() {
    // Obtém o conteúdo de texto do elemento de preço
    return await this.price.textContent();
  }

  // Método assíncrono que retorna o texto da descrição do produto
  async getDescription() {
    // Obtém o conteúdo de texto do elemento de descrição
    return await this.description.textContent();
  }

  // Método assíncrono que executa o clique no botão de adicionar ao carrinho
  async addToCart() {
    // Realiza o clique no botão identificado anteriormente
    await this.addToCartButton.click();
  }
}

// Exporta a classe ProductDetailsPage para que possa ser importada e utilizada em outros arquivos de teste
module.exports = { ProductDetailsPage };
