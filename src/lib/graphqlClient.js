import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://magento.demo.ceymox.net/graphql'; // Replace with your GraphQL endpoint

export const client = new GraphQLClient(endpoint);
