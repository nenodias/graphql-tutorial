### knex
knex migrate:latest

### Exemplo de consultas com graphql
{
  getUsers(offset: 1,limit:2){
    name email
  }
  getUser(id:1) {
    id
    name
    email
  }
}

### Exmplo de mutation