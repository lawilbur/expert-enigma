const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    cover: String,
    year: String,
    description: String,
    likes: {
        type: Number,
        default: 0
    }
})

const Game = mongoose.model('Game' , gameSchema);

module.exports = Game;
