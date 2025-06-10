# Funcionalidade: Página do Carrinho de Compras

## Background:
#### Given o usuário adicionou produtos ao carrinho
#### And está na página do carrinho

---

## Scenario: Verificar se um produto está no carrinho
#### When verifica se o produto "Sauce Labs Backpack" está no carrinho
#### Then o produto "Sauce Labs Backpack" deve estar visível no carrinho

---

## Scenario: Iniciar o processo de checkout
#### When pressiona o botão "Checkout"
#### Then deve ser redirecionado para a etapa de checkout
S