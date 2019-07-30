import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('components/movie-page/movie-page.stories');
    require('components/movie-block/movie-block.stories');
    require('components/movie-loyout/movie-loyout.stories');
    require('components/movie-card/movie-card.stories');
    require('components/movie/movie.stories');
    require('components/search-input/search-input.stories');
    require('components/search-block/search-block.stories');
    require('components/not-found/not-found.stories');
    require('components/toggle-button/toggle-button.stories');
    require('components/toggle-loyout/toggle-loyout.stories');
    require('containers/toggle-container/toggle-container.stories');
    require('components/button/button.stories');
    require('components/logo/logo.stories');
}

configure(loadStories, module);
