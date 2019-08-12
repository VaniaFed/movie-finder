import axios from 'axios';

export const getMovies = async params => {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    const movies = await axios.get(url, { params }).then(res => {
        return res.data;
    });
    return movies;
};
