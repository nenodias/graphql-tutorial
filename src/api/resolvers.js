const db = require('../config/database');

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first();
        },
        async getUsers(_, {offset, limit}) {
            offset = offset || 0;
            limit = limit || 100;
            return await db('users').limit(limit).offset(offset);
        }
    },
    Mutation: {
        async createUser (_, { input }) {
            const resultado = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            });

            const id = resultado[0];
            return await db('users').where({ id }).first();
        }
    }
};