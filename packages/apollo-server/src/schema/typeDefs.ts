import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    dogs: [Dog]
    getDogById(id: ID!): Dog
  }

  enum DogBreed {
    POODLE
    HUSKY
    CHIHUAHUA
  }

  type Dog {
    id: ID!
    name: String
    breed: DogBreed
  }
`;

export default typeDefs;
