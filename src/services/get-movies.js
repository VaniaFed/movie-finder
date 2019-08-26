import gql from 'graphql-tag';
import { stringify } from 'query-string';
import { client } from 'src/client';

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
    const movies = await client().query({
        query: getMoviesQuery,
        variables: { searchParam }
    });
    return movies.data.data;
};
