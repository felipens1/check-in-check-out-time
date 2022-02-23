import { Router } from "express";
import sequelize from '../database/sequelize.js'
import User from '../models/User.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Funcionou!');
});

router.get('/users', (req, res) => {
    User.findAll()
        .then( users => res.json(users));
});

router.post('/user', (req, res) => {
    const { name } = req.body;

    console.log('Log')

    User.create({ name: name })
        .then( newUser => res.json(newUser));
});

export default router;