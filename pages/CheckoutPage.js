// Classe que representa a página de checkout (finalização da compra)
class CheckoutPage {
  // O construtor recebe o objeto 'page' do Playwright e define os elementos da página
  constructor(page) {
    // Armazena a instância da página para uso nos métodos da classe
    this.page = page;

    // Campos de input do formulário de checkout:

    // Localiza o campo para o primeiro nome do cliente
    this.firstNameInput = page.locator('#first-name');

    // Localiza o campo para o sobrenome do cliente
    this.lastNameInput = page.locator('#last-name');

    // Localiza o campo para o código postal (CEP)
    this.postalCodeInput = page.locator('#postal-code');

    // Botões da página:

    // Localiza o botão para continuar para a próxima etapa do checkout
    this.continueButton = page.locator('input[data-test="continue"]');

    // Localiza o botão para finalizar o pedido
    this.finishButton = page.locator('button[data-test="finish"]');

    // Localiza o elemento que exibe a mensagem de confirmação do pedido concluído
    this.completeMessage = page.locator('.complete-header');
  }

  // Método para preencher o formulário de checkout com os dados fornecidos
  async fillCheckoutForm(firstName, lastName, postalCode) {
    // Preenche o campo de primeiro nome
    await this.firstNameInput.fill(firstName);

    // Preenche o campo de sobrenome
    await this.lastNameInput.fill(lastName);

    // Preenche o campo de código postal (CEP)
    await this.postalCodeInput.fill(postalCode);
  }

  // Método para clicar no botão "Continue" e avançar para a próxima etapa do checkout
  async clickContinue() {
    await this.continueButton.click();
  }

  // Método para clicar no botão "Finish" e finalizar o pedido
  async clickFinish() {
    await this.finishButton.click();
  }

  // Método para obter o texto da mensagem de confirmação final do pedido
  async getCompleteMessage() {
    return await this.completeMessage.textContent();
  }
}

// Exporta a classe para ser usada em outros arquivos
module.exports = { CheckoutPage };
