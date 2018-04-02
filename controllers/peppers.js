const express = require('express');
const peppers = express.Router();
const Game = require('../models/models.js');

peppers.get('/' , (req , res)=>{
    Game.find({}, (err , foundGames)=>{
        res.json(foundGames);
    });
});

peppers.post('/' , (req , res)=>{
    Game.create(req.body, (err , createdGame)=>{
        res.json(createdGame);
    });
});

peppers.delete('/:id' , (req , res)=>{
    Game.findByIdAndRemove(req.params.id, (err , removedGame)=>{
        res.json(removedGame);
    });
});

peppers.put('/:id' , (req , res)=>{
    Game.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err , updatedGame)=>{
        res.json(updatedGame);
    });
});

module.exports = peppers;
