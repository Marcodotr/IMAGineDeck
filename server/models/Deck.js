const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    deckId: {
        type: String
    },
    user: {
        type: String
    },
    cards: [
        {
            cardId: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            img: {
                type: String,
                required: true,
            },
            cost: {
                type: Number,
                required: true,
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