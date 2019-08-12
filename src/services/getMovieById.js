import axios from 'axios';

export const getMovieById = async payload => {
    const url = `http://react-cdp-api.herokuapp.com/movies/${payload.id}`;
    const movie = await axios(url).then(res => {
        return res.data;
    });
    return movie;
};
