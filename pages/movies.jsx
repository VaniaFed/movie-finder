import React from 'react';
import { MoviePageSmart } from 'containers/movie-page-smart';

const Movies = ({ match }) => {
    return <MoviePageSmart match={match} />;
};
Movies.getInitialProps = ({ query }) => {
    const match = {
        params: query
    };
    return { match };
};

export default Movies;
