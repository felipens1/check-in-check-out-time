import TimeCard from "../models/TimeCard.js";

export async function findTimeCardById(req, res) {
    const { id } = req.params;

    const timeCard = await TimeCard.findByPk(id);

    return res.json(timeCard);
}

export async function findAllTimeCards(req, res) {
    return await TimeCard.findAll()
        .then(timeCard => res.json(timeCard));
}

export async function createTimeCard(req, res) {
    const { checkInTime, checkOutTime } = req.body;

    return await TimeCard.create({ 
        checkInTime: checkInTime, 
        checkOutTime: checkOutTime
    }).then(newTimeCard => res.json(newTimeCard));
}