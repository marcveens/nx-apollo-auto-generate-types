# nx-apollo-auto-generate-types

My blog post about this repo: https://www.marcveens.nl/posts/nx-apollo-auto-generate-types

--- 

Run the project locally:
1. `npm install`
2. `npm run serve` or `nx serve`

Enjoy the automatic generation of Typescript types based on GraphQL type definitions! 🥳

I added a custom Webpack plugin to automatically trigger the generation command every time a watch event occurs or when a build is triggered. Change something in `packages/apollo-server/src/schema/typeDefs.ts` and `packages/apollo-server/src/types/graphql-types.ts` is automatically renewed. 

Stack used:
- [Nx](https://nx.dev/) - Build tooling
- [apollo-server](https://www.npmjs.com/package/apollo-server) - GraphQL server
- [@graphql-codegen/cli](https://www.graphql-code-generator.com/) - GraphQL -> Typescript generator




