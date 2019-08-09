import { request } from './request';

export const getFilms = action => {
    try {
        return request(action);
    } catch (err) {
        console.log(err.message);
    }
};
