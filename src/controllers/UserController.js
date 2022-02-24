import User from '../models/User.js';

export async function findAll(req, res) {
    return await User.findAll()
        .then(users => res.json(users));
}

export async function findById(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.json(user);
}

export async function create(req, res) {
    const { name } = req.body;

    const user = { name: name };

    return await User.create(user)
        .then(newUser => res.json(newUser));
}

export async function update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    return await User.update({ name: name}, { where: { id: id}})
        .then(newUser => res.json(newUser));
}

export async function destroy(req, res) {
    const { id } = req.params;
    return await User.destroy({ where : { id: id}})
        .then(userDestroyed => res.json(userDestroyed));
}