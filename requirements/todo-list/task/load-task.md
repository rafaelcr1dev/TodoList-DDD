# Carregar TASKS

## BDD

### Funcionalidade 

Eu como cliente
Quero ver minhas TASKS cadastradas
Para o gerenciar qual delas foram concluídas e qual delas estão abertas.

### Cenários

Dado que estou no site de TASKS como cliente
Quando ele abrir a pagina de Listar TASKS
Então serão exibidos os resultados da TASKS.

## UseCases

### Caso de sucesso

❌ Exibir os resultados das TASKS cadastradas ordenado por taskOrdination
❌ Recebe as respostas da lista de TASKS
❌ Retorna 200, com o id, taskName e taskActive

### Exceções

❌ Retorna erro 400 se não existir TASKS cadastradas

❌ ✅