# Funcionalidade: Finalização da compra (Checkout)

## Background:
#### Given o usuário está na etapa de checkout com itens no carrinho

---

## Scenario: Finalizar pedido com dados válidos
#### When preenche o campo "First Name" com "Maria"
#### And preenche o campo "Last Name" com "Silva"
#### And preenche o campo "Postal Code" com "12345-678"
#### And pressiona o botão "Continue"
#### And pressiona o botão "Finish"
#### Then deve ser exibida a mensagem de confirmação "Thank you for your order!"
