import axios from 'axios';

export const getFilmsById = payload => {
    const url = `http://react-cdp-api.herokuapp.com/movies/${payload.id}`;
    return axios(url).then(res => {
        return res.data;
    });
};
