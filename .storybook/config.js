import { configure } from '@storybook/react';
// import '../src/global.scss';

function loadStories() {
    require('components/button/button.stories');

    // requires alias for the following stories:
    // require('../src/components/search-input/search-input.stories');
    // require('../src/components/search-block/search-block.stories');
    // require('../src/components/movie-loyout/movie-loyout.stories');
}

configure(loadStories, module);
