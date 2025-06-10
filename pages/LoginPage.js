// pages/LoginPage.js

// Criação da classe LoginPage, que representa a página de login do site
class LoginPage {

  // O construtor recebe o objeto 'page' do Playwright para interagir com o navegador
  constructor(page) {
    this.page = page;

    // Localizador do campo de nome de usuário (input com id 'user-name')
    this.usernameInput = page.locator('#user-name');

    // Localizador do campo de senha (input com id 'password')
    this.passwordInput = page.locator('#password');

    // Localizador do botão de login (botão com id 'login-button')
    this.loginButton = page.locator('#login-button');

    // Localizador da mensagem de erro (div com data-test='error')
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Método para navegar até a página inicial do site
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Método para realizar o login, preenchendo usuário e senha, e clicando no botão
  async login(username, password) {
    await this.usernameInput.fill(username);       // Preenche o campo de usuário
    await this.passwordInput.fill(password);       // Preenche o campo de senha
    await this.loginButton.click();                // Clica no botão de login
  }

  // Método para obter a mensagem de erro exibida na tela (útil para testes negativos)
  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  // Método para verificar se a mensagem de erro está visível
  async isErrorVisible() {
    return await this.errorMessage.isVisible();
  }
}

// Exporta a classe para ser utilizada em outros arquivos (ex: nos testes)
module.exports = { LoginPage };
