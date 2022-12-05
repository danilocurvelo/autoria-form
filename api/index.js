const app = require('express')();
const { v4 } = require('uuid');
const postService = require('../services/post-service');

app.get('/api', (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
    const response = JSON.stringify(postService.all())
    res.send(response)
});

app.get('/api/:slug', (req, res) => {
    const { slug } = req.params;
    const post = postService.findById(slug)
    if (post !== undefined){
        res.send(JSON.stringify(post))
    }else{
        res.send({})
    }
});

module.exports = app;
