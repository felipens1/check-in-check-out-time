import User from '../models/User.js';

export async function findAllUsers(req, res) {
    return await User.findAll()
        .then(users => res.json(users));
}

export async function findUserById(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.json(user);
}

export async function createUser(req, res) {
    const { name } = req.body;

    const user = { name: name };

    return await User.create(user)
        .then(newUser => res.json(newUser));
}

export async function updateUser(req, res) {
    const { id } = req.params;

    const { name, timecard_id } = req.body;

    return await User.update({ name: name }, { where: { id: id}})
        .then(newUser => res.json(newUser));
}

export async function destroyUser(req, res) {
    const { id } = req.params;

    return await User.destroy({ where : { id: id}})
        .then(userDestroyed => res.json(userDestroyed));
}