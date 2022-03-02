import TimeCard from "../models/TimeCard.js";
import User from "../models/User.js";

export async function findTimeCardById(req, res) {
    const { id } = req.params;

    const timeCard = await TimeCard.findByPk(id, { include: User });

    return res.json(timeCard);
}

export async function findAllTimeCards(req, res) {
    return await TimeCard.findAll()
        .then(timeCard => res.json(timeCard));
}

export async function createTimeCard(req, res) {
    const { checkInTime, checkOutTime, user_id } = req.body;

    return await TimeCard.create({ 
        checkInTime: checkInTime, 
        checkOutTime: checkOutTime,
        user_id: user_id
    }).then(newTimeCard => res.json(newTimeCard));
}

export async function updateTimeCard(req, res) {
    const { id, checkInTime, checkOutTime, user_id } = req.body;

    return await TimeCard.update({ 
        checkInTime: checkInTime,
        checkOutTime: checkOutTime,
        user_id: user_id
    }, {
        where: { id: id } 
    }).then(newTimeCard => res.json(newTimeCard));
}