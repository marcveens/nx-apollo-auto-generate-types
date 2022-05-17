import { Dog, DogBreed, Resolvers } from "../types/graphql-types";

const dogs: Dog[] = [
  {
    id: '1',
    name: 'Snoop',
    breed: DogBreed.Poodle
  },
  {
    id: '2',
    name: 'Kanye',
    breed: DogBreed.Husky
  },
  {
    id: '3',
    name: 'Sherlock',
    breed: DogBreed.Chihuahua
  }
];

export const resolvers: Resolvers = {
  Query: {
    dogs: async (_, args) => {
      return Promise.resolve(dogs);
    },
    getDogById: async (_, { id }) => {
      return Promise.resolve(dogs.find(dog => dog.id === id));
    }
  }
}
