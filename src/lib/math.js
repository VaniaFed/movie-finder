import { fetchVeryBigDataFromServer } from './fetch-very-big-data-from-server';

export const sum = (...args) => {
    fetchVeryBigDataFromServer();
    return args.reduce((s, c) => s + c);
};
