# Funcionalidade: Página de Login

## Background:
#### Given o usuário acessa a página "https://www.saucedemo.com"

---

## Scenario: Login com credenciais válidas
#### When preenche o campo "Username" com "standard_user"
#### And preenche o campo "Password" com "secret_sauce"
#### And pressiona o botão "Login"
#### Then deve ser redirecionado para a URL "https://www.saucedemo.com/inventory.html"