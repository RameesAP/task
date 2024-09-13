import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://magento.demo.ceymox.net/graphql',
  cache: new InMemoryCache(),
});

export default client;
