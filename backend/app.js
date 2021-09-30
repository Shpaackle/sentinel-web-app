const express = require('express');

const app = express();

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
