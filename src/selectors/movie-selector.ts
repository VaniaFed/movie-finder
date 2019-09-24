import { MovieState } from 'types/index';

interface GlobalState {
    movie: MovieState;
}
export const movieSelector = (state: GlobalState) => state.movie;
