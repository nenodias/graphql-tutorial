const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

/*
knex('users').insert({
    name:'Teste',
    email:'teste@teste.com',
    password:'teste'
});

knex('users').select('*').then(resultado => {
    console.log(resultado)
});

knex('users').where({id:1}).first().then(resultado => {
    console.log(resultado)
})

*/


module.exports = knex;