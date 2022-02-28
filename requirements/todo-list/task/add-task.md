# Criar TASK

## BDD

### Funcionalidade 

Eu como cliente
Quero cadastrar minha(s) TASK(S)
Para o listar minhas TASK(S) cadastradas.

### Cenários

Dado que estou no site de TASK como cliente
Quando abrir o formulário de Nova TASK
Então sera adicionado um novo TASK no formulário.

## UseCases

### Caso de sucesso

❌ O usuário adiciona um taskName
❌ Valida dado obrigatório de taskName
❌ Valida se o formato do taskName esta dentro do esperado
❌ Gera um ID aleatório para o TASK no formato UUID
❌ Gera um taskOrdination usando a quantidade todos de TASKS cadastradas em um TODO + 1
❌ Valida se os dados obrigatórios foram enviado para o LocalStorage
❌ Cria o TASK com os dados fornecidos
❌ Retorna 200, com o id e taskName

### Exceções

❌ Retorna erro 400 se o taskName não foi enviado pelo usuário
❌ Retorna erro 400 se o taskName esta fora de formato
❌ Retorna erro 500 se o ID não estiver no formato UUID

❌ ✅