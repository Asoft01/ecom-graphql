const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            // return ["Hello", null, "Friend"];
            // return null;
            return "Hello"; 
        }, 
        products: () => {
            return [{
               name : "Bike", 
               description: "Montain Bike", 
               quantity: 20, 
               price: 999.99, 
               onSale: false
            }]
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

