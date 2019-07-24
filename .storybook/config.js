import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('../src/components/ui/movie/movie.stories');
    require('../src/components/ui/movie-info/MovieInfo.stories');
    require('../src/components/ui/not-found/not-found.stories');
    require('../src/components/ui/ToggleContainer/ToggleContainer.stories');
    require('../src/components/ui/toggle-button/toggle-button.stories');

    // requires alias for the following stories:
    // require('../src/components/ui/search-input/search-input.stories');
    // require('../src/components/ui/search-block/search-block.stories');
    // require('../src/components/ui/movies/movies.stories');
}

configure(loadStories, module);
