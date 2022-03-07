# Editar TODO

## BDD

### Funcionalidade 

- Eu como cliente
- Quero editar minha(s) TODO relacionada a um UUID
- Para o alterar minhas informações das TODOS cadastradas.

### Cenários

- Dado que estou no site de TODO como cliente
- Quando clicar numa TODO cadastrada
- Então poderão ser alterados as infos de todoName e todoActive.

## UseCases

### Caso de sucesso

- ❌ O usuário clica numa TODO cadastrada
- ❌ O usuário altera um todoName
- ❌ O usuário altera um todoActive
- ❌ Valida dado obrigatório de todoName
- ❌ Valida se o formato do todoName esta dentro do esperado
- ❌ Valida se os dados obrigatórios foram cadastrados no LocalStorage
- ❌ Edita o TODO com os dados fornecidos
- ❌ Retorna 200, com o id, todoName e todoActive

### Exceções

- ❌ Retorna erro 400 se o todoName e todoActive não foi enviado pelo usuário
- ❌ Retorna erro 400 se o todoName e todoActive esta fora de formato
- ❌ Retorna erro 400 se as TODO não forem alteradas
- ❌ Retorna erro 500 se o ID não estiver no formato UUID

❌ ✅