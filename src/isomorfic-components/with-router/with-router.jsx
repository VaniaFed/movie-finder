export const WithRouter = CLIENT_SIDE_RENDERING
    ? require('./csr-with-router').CSRWithRouter
    : require('./ssr-with-router').SSRWithRouter;
