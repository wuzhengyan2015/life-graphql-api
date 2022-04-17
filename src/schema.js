const { gql } = require('apollo-server');

const typeDefs = gql`
  type Weather {
    city: String!
    date: String!
    wea: String!
  }

  type Query {
    weather(city: String!): Weather!
  }
`;

module.exports = typeDefs;
