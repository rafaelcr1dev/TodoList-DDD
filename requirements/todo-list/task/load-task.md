# Carregar TASKS

## BDD

### Funcionalidade 1

- Eu como cliente
- Quero ver minhas TASKS cadastradas
- Para o gerenciar qual delas foram concluídas e qual delas estão abertas.

### Cenários 1

- Dado que estou no site de TASKS como cliente
- Quando ele abrir a pagina de Listar TASKS
- Então serão exibidos os resultados da TASKS.

## UseCases

### Caso de sucesso

- ❌ Exibir os resultados das TASKS cadastradas ordenado por taskOrdination
- ❌ Recebe as respostas da lista de TASKS
- ❌ Retorna 200, com o id, taskName, taskActive e taskIsDone

### Exceções

- ❌ Retorna erro 400 se não existir TASKS cadastradas

# Marcar TASK como feito

## BDD

### Funcionalidade 2

- Eu como cliente
- Quero ver minhas TASKS cadastradas
- Para o poder setar qual tarefa foi concluída.

### Cenários 2

- Dado que estou no site de TASKS como cliente
- Quando atualizado o status do taskIsDone na listar TASKS
- Então serão exibidos os resultados da TASKS atualizados.

## UseCases 2

### Caso de sucesso

- ❌ Altera um taskIsDone das TASKS
- ❌ Recebe as respostas da lista de TASKS atualizado
- ❌ Retorna 200, com o id, taskName, taskActive e taskIsDone

### Exceções

- ❌ Retorna erro 400 se as TASKS não forem alteradas

❌ ✅