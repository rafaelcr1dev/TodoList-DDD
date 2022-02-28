# Carregar TASKS

## BDD

### Funcionalidade 

Eu como cliente
Quero ver minhas TASKS cadastradas
Para o poder setar qual tarefa foi concluída.

### Cenários

Dado que estou no site de TASKS como cliente
Quando ele modifica a informação taskIsDone na Listar TASKS
Então serão exibidos os resultados da TASKS atualizados.

## UseCases

### Caso de sucesso

❌ Altera um taskIsDone das TASK
❌ Recebe as respostas da lista de TASKS atualizado
❌ Retorna 200, com o id, taskName, taskActive e taskIsDone

### Exceções

❌ Retorna erro 400 se as TASKS não forem alteradas

❌ ✅