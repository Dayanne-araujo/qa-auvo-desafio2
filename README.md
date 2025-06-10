# 🧪 Auvo Challenge - Automação com Playwright

## 📌 Descrição

Prova de conceito (POC) de automação para validar o fluxo de cadastro e pesquisa de produtos no site fictício [saucedemo.com](https://www.saucedemo.com), conforme desafio técnico da Auvo.

### Este fluxo cobre:

1. Login com usuário padrão  
2. Navegação na lista de produtos  
3. Validação do título, preço e descrição do produto selecionado  
4. Adição ao carrinho e navegação para o checkout  
5. Preenchimento do formulário de checkout e finalização do pedido  

---

## 🛠️ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) 1.52.0  
- Node.js (versão 18 ou superior)  
- JavaScript  
- Arquitetura Page Object Model (POM)  

---

## 📁 Estrutura do Projeto

/pages       → Objetos de página com os elementos e ações de cada tela:  
- LoginPage.js  
- ProductsPage.js  
- ProductDetailsPage.js  
- CartPage.js  
- CheckoutPage.js  
- **OverviewPage.js** ✅  
/tests       → Scripts dos testes automatizados  
playwright.config.js → Configuração dos testes  
package.json e package-lock.json → Dependências e scripts

---

## ⚙️ Como Configurar o Ambiente

### 1. Clonar o repositório:

```bash
git clone <link-do-repositorio>
cd <nome-da-pasta>
```

### 2. Instalar as dependências do projeto:

```bash
npm install
```

### 3. Instalar os navegadores do Playwright:

```bash
npx playwright install
```

---

## 🚀 Como Executar os Testes

### Rodar todos os testes em modo headless (sem interface gráfica):

```bash
npx playwright test
```

### Rodar os testes com navegador visível (modo headed):

```bash
npx playwright test --headed
```

### Abrir o relatório HTML do último teste executado:

```bash
npx playwright show-report
```

---

## 🔐 Credenciais Utilizadas

- **Usuário:** `standard_user`  
- **Senha:** `secret_sauce`

---

## 🔎 Observações

O site utilizado não possui um campo de busca real. Portanto, a etapa de "pesquisa" foi simulada por meio da navegação e seleção direta de um produto da lista.

- Produto validado no teste: **Sauce Labs Backpack**

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins de avaliação técnica (Desafio Auvo).


