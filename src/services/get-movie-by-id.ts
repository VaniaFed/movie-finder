import gql from 'graphql-tag';
import { client } from 'src/client';
import { MovieType } from 'src/types';

const getMovie = gql`
    query($id: String!) {
        movie(id: $id) @rest(type: "Movie", path: "/{args.id}") {
            id
            title
            release_date
            poster_path
            overview
            genres
            runtime
            hello
        }
    }
`;

interface Query {
    query(
        id: string
    ): {
        movie: {
            data: {
                movie: MovieType;
            };
        };
    };
    variables: {
        id: string;
    };
}

export const getMovieById = async (id: string) => {
    const query: Query = {
        query: getMovie,
        variables: { id: String(id) }
    };
    const movie = await client().query(query);
    // transformator
    return movie.data.movie;
};
