import gql from 'graphql-tag';
import { stringify } from 'query-string';
import { client } from 'src/client';
import { ControlsData, MovieType } from 'types/index';

const getMoviesQuery = gql`
    query($searchParam: String!) {
        movies(searchParam: $searchParam)
            @rest(type: "Movies", path: "/?{args.searchParam}") {
            data
        }
    }
`;

interface Query {
    query(
        searchParam: string
    ): {
        data: {
            movies: {
                movie: MovieType[];
            };
        };
    };
    variables: {
        searchParam: string;
    };
}

export const getMovies = async (params: ControlsData) => {
    const searchParam = stringify(params);
    const query: Query = {
        query: getMoviesQuery,
        variables: { searchParam }
    };
    const {
        data: {
            movies: { data }
        }
    } = await client().query(query);
    return data;
};
