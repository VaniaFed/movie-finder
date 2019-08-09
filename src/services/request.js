import axios from 'axios';
import { stringify } from 'query-string';
import { FETCH_MOVIE_BY_ID_REQUEST } from 'constants.js';

export const request = ({ type, payload }) => {
    let url = 'http://react-cdp-api.herokuapp.com/movies?';
    switch (type) {
        case FETCH_MOVIE_BY_ID_REQUEST: {
            url = `http://react-cdp-api.herokuapp.com/movies/${payload.id}`;
            break;
        }
        default:
            url += stringify(payload);
            break;
    }
    return axios(url).then(res => {
        return res.data;
    });
};
