import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('components/movie-card/movie-card.stories');
    require('components/not-found/not-found.stories');
    require('components/toggle-button/toggle-button.stories');
    require('components/toggle-loyout/toggle-loyout.stories');
    require('containers/toggle-container/toggle-container.stories');

    // requires alias for the following stories:
    // require('../src/components/ui/search-input/search-input.stories');
    // require('../src/components/ui/search-block/search-block.stories');
    // require('../src/components/ui/movies/movies.stories');
}

configure(loadStories, module);
