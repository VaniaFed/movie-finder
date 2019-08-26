const cacheableResponse = require('cacheable-response');

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
    ttl: 1000 * 60 * 60,
    get: async ({ req, res, pagePath, queryParams }) => ({
        data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
});

app.prepare().then(() => {
    const server = express();

    server.get('/', (req, res) => {
        res.redirect('/search');
    });

    server.get('/search', (req, res) =>
        ssrCache({ req, res, pagePath: '/search' })
    );

    server.get('/movies', (req, res) => {
        console.log('movies');
        console.log(req.params);

        return app.render(req, res, '/movies', { id: req.params.id });
        // return ssrCache({ req, res, pagePath: '/movies', id: req.params.id });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
