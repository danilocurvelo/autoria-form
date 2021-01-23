var express = require('express');
const postService = require('../services/post-service');

var router = express.Router();

router.get('/', function (req, res, next) {
    const response = JSON.stringify(postService.all())
    res.send(response)
});

router.get('/:id', function (req, res, next) {
    const post = postService.findById(req.params.id)
    if (post !== undefined){
        res.send(JSON.stringify(post))
    }else{
        res.send({})
    }
});

module.exports = router;
