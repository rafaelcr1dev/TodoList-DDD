# Listar TODO

## BDD

### Funcionalidade 

Eu como cliente
Quero ver minhas TODOS cadastradas
Para o gerenciar qual delas foram concluídas e qual delas estão abertas.

### Cenários

Dado que estou no site de TODO como cliente
Quando ele abrir a pagina de Listar TODOS
Então serão exibidos os resultados do TODO.

## UseCases

### Caso de sucesso

❌ Recebe as respostas da lista de TODOS
❌ Retorna 200, com o id, todoName e todoActive

### Exceções

❌ Retorna erro 400 se nao existir de TODOS cadastradas

❌ ✅