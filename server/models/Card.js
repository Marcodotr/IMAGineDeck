const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    cardId: {
        type: String
    },
    dbfId: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    cardSet: {
        type: String,
    },
    type: {
        type: String,
    },
    faction: {
        type: String,
    },
    rarity: {
        type: String,
    },
    cost: {
        type: Number,
    },
    attack: {
        type: Number,
    },
    health: {
        type: Number,
    },
    text:{
        type: String,
    },
    flavor: {
        type: String,
    },
    artist: {
        type: String,
    },
    collectible: {
        type: Boolean,
    },
    playerClass: {
        type: String,
    },
    img: {
        type: String,
    },
    locale: {
        type: String,
    },
    mechanics:[
    {
        name:{
        type: String,
        }
    }
    ]
    }
);

const Card = model('Card', cardSchema);

module.exports = Card;