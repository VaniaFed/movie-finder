import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('../src/components/ui/movie/movie.stories');
    require('../src/components/ui/movie-info/movie-info.stories');
    require('../src/components/ui/not-found/not-found.stories');
    require('../src/components/ui/toggle-container/toggle-container.stories');
    require('../src/components/ui/toggle-button/toggle-button.stories');

    // requires alias for the following stories:
    // require('../src/components/ui/search-input/search-input.stories');
    // require('../src/components/ui/search-block/search-block.stories');
    // require('../src/components/ui/movie-loyout/movie-loyout.stories');
}

configure(loadStories, module);
