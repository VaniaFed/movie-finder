import { ApolloClient } from 'apollo-client';
import {
    InMemoryCache,
    IdGetter,
    InMemoryCacheConfig
} from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';
import fetch from 'node-fetch';
import _ from 'lodash';

const httpLink = createHttpLink({
    uri: 'http://react-cdp-api.herokuapp.com/movies',
    useGETForQueries: true,
    fetch
});
const dataIdFromObject: IdGetter = movie => movie.id || null;

const config: InMemoryCacheConfig = {
    dataIdFromObject
};

const cache = new InMemoryCache(config);

export const httpClient = () =>
    new ApolloClient({
        ssrMode: true,
        link: httpLink,
        cache
    });

const restLink = () =>
    new RestLink({
        uri: 'http://react-cdp-api.herokuapp.com/movies'
    });

export const restClient = () => {
    return new ApolloClient({
        link: restLink(),
        cache
    });
};

const getClientWithNecessaryLink = () =>
    typeof window === 'undefined' ? httpClient() : restClient();

export const client = _.memoize(getClientWithNecessaryLink);
