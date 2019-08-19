import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
    uri: 'http://react-cdp-api.herokuapp.com/movies'
});
const cache = new InMemoryCache({
    dataIdFromObject: movie => movie.id || null
});

export const client = new ApolloClient({
    link: restLink,
    cache
});
