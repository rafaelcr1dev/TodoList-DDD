# Editar TASK

## BDD

### Funcionalidade 

- Eu como cliente
- Quero editar minha(s) TASK relacionada a um UUID
- Para o alterar minhas informações das TASK cadastradas.

### Cenários

- Dado que estou no site de TASK como cliente
- Quando clicar numa TASK cadastrada
- Então poderão ser alterados as infos de taskName e taskActive.

## UseCases

### Caso de sucesso

- ❌ O usuário clica numa TASK cadastrada
- ❌ O usuário altera um taskName
- ❌ O usuário altera um taskActive
- ❌ O usuário altera um taskOrdination
- ❌ Valida dado obrigatório de taskName
- ❌ Valida se o formato do taskName esta dentro do esperado
- ❌ Valida se os dados obrigatórios foram cadastrados no LocalStorage
- ❌ Edita o TASK com os dados fornecidos
- ❌ Retorna 200, com o id, taskName, taskActive e taskIsDone

### Exceções

- ❌ Retorna erro 400 se o taskName e taskActive não foi enviado pelo usuário
- ❌ Retorna erro 400 se o taskName e taskActive esta fora de formato
- ❌ Retorna erro 400 se as TASKS não forem alteradas
- ❌ Retorna erro 500 se o ID não estiver no formato UUID

❌ ✅

### Funcionalidade 

Eu como cliente
Quero ver minhas TASKS cadastradas
Para o poder setar qual tarefa foi concluída.

### Cenários

Dado que estou no site de TASKS como cliente
Quando ele modifica a informação taskIsDone na Listar TASKS
Então serão exibidos os resultados da TASKS atualizados.