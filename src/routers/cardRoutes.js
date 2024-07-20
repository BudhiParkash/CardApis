const express = require('express');
const Card = require('../model/cards');

const router = express.Router();

router.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.send(cards);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/cards', async (req, res) => {
    try {
        const card = new Card(req.body);
        await card.save();
        res.send(card);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/cards/:id', async (req, res) => {
    try {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(card);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/cards/:id', async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.send({ message: 'Card deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
