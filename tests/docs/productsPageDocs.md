# Funcionalidade: Página de Listagem de Produtos

## Background:
#### Given o usuário está logado e na página de produtos "https://www.saucedemo.com/inventory.html"

---

## Scenario: Adicionar um produto ao carrinho
#### When seleciona o produto "Sauce Labs Backpack"
#### And pressiona o botão "Add to cart"
#### Then o produto "Sauce Labs Backpack" deve estar adicionado ao carrinho

---

## Scenario: Visualizar preço e descrição do produto
#### When visualiza o preço do produto "Sauce Labs Backpack"
#### And visualiza a descrição do produto "Sauce Labs Backpack"
#### Then o preço exibido deve estar correto
#### And a descrição exibida deve estar correta
