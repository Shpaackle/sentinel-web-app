const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user');

const User = require('./models/user');

const app = express();

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        console.log('connected to database successfully');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use(express.json());

app.post('/api/users/create', (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    console.log('username: ' + user.username);
    console.log('email: ' + user.email);
    console.log('password: ' + user.password);

    User.exists({ username: user.username }).then((found) => {
        if (found) {
            console.log('found should be true!');
            console.log('found = ' + found);
            res.status(201).json({
                message: 'User already exists',
            });
        } else {
            console.log('found should be false!');
            console.log('found = ' + found);

            user.save().then((createdUser) => {
                res.status(201).json({
                    message: 'User added successfully',
                    userID: createdUser._id,
                });
            });
        }
    });
});

app.get('/api/users/login', (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ $or: [{ username: username }, { email: email }] }, function (err, user) {
        if (err) {
            console.error('SERVER ERROR DURING LOGIN ATTEMPT');
            console.error(err);
            res.status(404).json({
                message: err,
                userID: -1,
            });
        }
        if (user && password == user.password) {
            res.status(201).json({
                message: 'User login successfull',
                userID: user._id,
            });
        } else {
            res.status(404).json({
                message: 'Login attempt failed',
                userID: null,
            });
        }
    });
});

app.use('/api/users/update', (req, res, next) => {});

app.use('/api/principles/esoteric', (req, res, next) => {
    const principles = [
        {
            id: 'Destiny',
            name: 'Principle of Destiny',
            duringRoleplayingText:
                'Signs and portents lead you towards an inevitable place in your life. You can always gain some measure of direction when needed.',
            minorTwist: 'What omen of dire fortune did you just witness?',
            majorTwist: 'What heinous prophecy just came true?',
            principleAbility: {
                icon: 'overcome',
                name: 'Principle of Destiny',
                actionType: 'A',
                gameText:
                    'Overcome a situation directly connected to your destiny and use your Max die. You and each of your allies gain a hero point.',
            },
        },
        {
            id: 'Energy/Element',
            name: 'Principle of [Energy/Element]',
            duringRoleplayingText: 'You have an affinity to or a love of [energy/element]. You can interact with that [energy/element] with ease.',
            minorTwist: 'What other energy/element is currently causing your powers to go on the fritz?',
            majorTwist: 'What source of energy/element is currently dampening all your powers?',
            principleAbility: {
                icon: 'overcome',
                name: 'Principle of [Energy/Element]',
                actionType: 'A',
                gameText: 'Overcome a challenge involving [energy/element] and use your Max die. You and each of your allies gain a hero point.',
            },
        },
    ];
    res.status(200).json({
        message: 'Principles fetched successfully!',
        principles: principles,
    });
});

module.exports = app;
