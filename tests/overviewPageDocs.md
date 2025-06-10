# Funcionalidade: Página de Resumo do Pedido (Overview)

## Background:
#### Given o usuário está na página de resumo do pedido com produtos adicionados

---

## Scenario: Visualizar produtos no resumo do pedido
#### When verifica se o produto "Sauce Labs Backpack" está visível no resumo
#### Then o produto "Sauce Labs Backpack" deve estar listado no resumo do pedido

---

## Scenario: Visualizar valores do pedido
#### When visualiza o subtotal dos itens
#### And visualiza o imposto aplicado
#### And visualiza o valor total do pedido
#### Then os valores exibidos devem estar corretos

---

## Scenario: Finalizar o pedido
#### When pressiona o botão "Finish"
#### Then deve ser exibida a mensagem de confirmação "Thank you for your order!"
