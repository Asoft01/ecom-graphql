const { gql } = require("apollo-server");
exports.typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        # [Category]! means it should not return a null value, rather return an empty array
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        # categories: [Category!]!
        category: Category
    }
    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`;
