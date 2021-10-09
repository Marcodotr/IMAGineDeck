const db = require('../config/connection');
const { User, Card } = require('../models');

const demonData = require('./demonHunter.json');
const druidData = require('./druid.json');
const hunterData = require('./hunter.json');
const mageData = require('./mage.json');
const neutralData = require('./neutral.json');
const paladinData = require('./paladin.json');
const priestData = require('./priest.json');
const rogueData = require('./rogue.json');
const shamanData = require('./shaman.json');
const warlockData = require('./warlock.json');
const warriorData = require('./warrior.json');

const userSeeds = require('./userSeeds.json');
// const { User } = require('../models');

db.once('open', async () => {
    await Card.deleteMany({});

    const demonHunter = await Card.insertMany(demonData);
    const druid = await Card.insertMany(druidData);
    const hunter = await Card.insertMany(hunterData);
    const mage = await Card.insertMany(mageData);
    const neutral = await Card.insertMany(neutralData);
    const paladin = await Card.insertMany(paladinData);
    const priest = await Card.insertMany(priestData);
    const rogue = await Card.insertMany(rogueData);
    const shaman = await Card.insertMany(shamanData);
    const warlock = await Card.insertMany(warlockData);
    const warrior = await Card.insertMany(warriorData);

    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('Cards Seeded!');
    process.exit(0);

})