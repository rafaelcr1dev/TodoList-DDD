# Criar TODO

## BDD

### Funcionalidade 

Eu como cliente
Quero cadastrar minha(s) atividade(s)
Para o listar minhas TODOS cadastradas.

### Cenários

Dado que estou no site de TODO como cliente
Quando ele abrir o formulário de Novo TODO
Então sera adicionado um novo TODO no formulário.

## UseCases

### Caso de sucesso

❌ O usuário adiciona um todoName
❌ Valida dado obrigatório de todoName
❌ Valida se o formato do todoName esta dentro do esperado
❌ Gera um ID aleatório para o TODO no formato UUID
❌ Valida se os dados obrigatórios foram enviado para o LocalStorage
❌ Cria o TODO com os dados fornecidos
❌ Retorna 200, com o id e todoName

### Exceções

❌ Retorna erro 400 se o todoName não foi enviado pelo usuário
❌ Retorna erro 400 se o todoName esta fora de formato
❌ Retorna erro 500 se o ID não estiver no formato UUID

❌ ✅