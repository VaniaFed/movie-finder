import axios from 'axios';
import { stringify } from 'query-string';

export const getFilms = payload => {
    const url = `http://react-cdp-api.herokuapp.com/movies?${stringify(
        payload
    )}`;
    return axios(url).then(res => {
        return res.data;
    });
};
