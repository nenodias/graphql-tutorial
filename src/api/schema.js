const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

const userAttribs = `
    id: ID
    name: String
    email: String
    password: String
`;

const typeDefs = `
    type User {
        ${userAttribs}
    }

    type Query {
        getUser(id: ID): User
        getUsers(limit: Int, offset: Int): [User]
    }

    input UserInput {
        ${userAttribs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers});