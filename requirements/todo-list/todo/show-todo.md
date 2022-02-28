# Ver TODO

## BDD

### Funcionalidade 

Eu como cliente
Quero editar minha TODO relacionada a um UUID
Para o mostrar as minhas informações da TODO cadastrada.

### Cenários

Dado que estou no site de TODO como cliente
Quando clicar numa TODO cadastrada
Então sera mostrado as infos de todoName e todoActive.

## UseCases

### Caso de sucesso

❌ O usuário clica numa TODO cadastrada
❌ Retorna 200, com o id, todoName e todoActive

### Exceções

❌ Retorna erro 400 se as TODO não existir

❌ ✅