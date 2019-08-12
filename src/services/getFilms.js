import axios from 'axios';

export const getFilms = params => {
    const url = 'http://react-cdp-api.herokuapp.com/movies';
    return axios.get(url, { params }).then(res => {
        return res.data;
    });
};
