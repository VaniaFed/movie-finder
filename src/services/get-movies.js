import gql from 'graphql-tag';
import { client } from 'src/client';
import { stringify } from 'query-string';

const getMoviesQuery = gql`
    query($searchParam: String!) {
        data(searchParam: $searchParam)
            @rest(type: "Movies", path: "/?{args.searchParam}") {
            data
        }
    }
`;

export const getMovies = async params => {
    const searchParam = stringify(params);
    const movies = await client.query({
        query: getMoviesQuery,
        variables: { searchParam }
    });
    return movies.data.data;
};
