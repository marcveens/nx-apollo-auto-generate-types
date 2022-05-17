import { ApolloServer } from 'apollo-server';
import { resolvers } from './schema/resolvers';
import typeDefs from './schema/typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
