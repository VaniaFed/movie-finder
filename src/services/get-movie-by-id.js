import gql from 'graphql-tag';
import { client } from 'src/client';

const getMovie = gql`
    query($id: String!) {
        Movie(id: $id) @rest(type: "Movie", path: "{args.id}") {
            id
            title
            release_date
            poster_path
            overview
            genres
            runtime
        }
    }
`;

export const getMovieById = async payload => {
    const movie = await client.query({
        query: getMovie,
        variables: { id: String(payload.id) }
    });
    return movie.data.Movie;
};
