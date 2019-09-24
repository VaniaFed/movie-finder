import { CLIENT_SIDE_RENDERING } from 'constants.ts';

export const Link = CLIENT_SIDE_RENDERING
    ? require('./csr-link').CSRLink
    : require('./ssr-link').SSRLink;
