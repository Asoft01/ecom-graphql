const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: [String!]!
    }
`

const resolvers = {
    Query: {
        hello: () => {
            // return ["Hello", null, "Friend"];
            // return null;
            return ["Hello"]; 
        }
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
}); 

server.listen().then(({ url }) => {
    console.log("Server is ready at "+ url); 
}); 

