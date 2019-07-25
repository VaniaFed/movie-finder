import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('../src/components/movie/movie.stories');
    require('../src/components/movie-info/movie-info.stories');
    require('../src/components/not-found/not-found.stories');
    require('../src/components/toggle-container/toggle-container.stories');
    require('../src/components/toggle-button/toggle-button.stories');

    // requires alias for the following stories:
    // require('../src/components/search-input/search-input.stories');
    // require('../src/components/search-block/search-block.stories');
    // require('../src/components/movie-loyout/movie-loyout.stories');
}

configure(loadStories, module);
