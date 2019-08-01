import { fetchVeryBigDataFromServer } from './fetchVeryBigDataFromServer';

export const sum = (...args) => {
    fetchVeryBigDataFromServer();
    return args.reduce((s, c) => s + c);
};
