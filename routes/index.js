const express = require('express');
const router  = express.Router();
const Player = require('./../models/Player');

const createError = require('http-errors');

router.post('/', async(req,res,next) => {
    console.log(req.body);
    try {
        await Player.create(req.body);
        res.status(202).send();
    }
    catch(error) {
        next(createError(400))
    }
});

router.get('/', (req,res,next) => {
    Player.find({}).limit(10).sort({ points: -1 })
        .then(playerList => res.status(200).json(playerList))
        .catch(error => next(createError(400)))
});

module.exports = router;