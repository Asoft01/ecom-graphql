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
        reviews: [Review!]!
    }
    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        Comment: String!
        Rating: Int!
    }
`;
