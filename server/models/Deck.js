const { Schema, model } = require('mongoose');

const deckSchema = new Schema({

    title: {
        type: String,
        required: 'You need a deck title',
    },
    user: {
        type: String
    },
    cards: [
        {
            cardId: {
                type: String,
            },
            name: {
                type: String,
                required: true,
            },
            img: {
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
            playerClass: {
                type: String,
            },
        }
    ]
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;