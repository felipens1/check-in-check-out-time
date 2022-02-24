import { Router } from "express";
import User from '../models/User.js';
import { createUser, destroyUser, findAllUsers, findUserById, updateUser } from "../controllers/UserController.js";
import { createTimeCard, findAllTimeCards, findTimeCardById } from "../controllers/TimeCardController.js";

const router = Router();

//users routes
router.get('/users', findAllUsers);
router.get('/user/:id', findUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', destroyUser);

//timecards routes
router.get('/timecard/:id', findTimeCardById);
router.get('/timecards', findAllTimeCards);
router.post('/timecard', createTimeCard);

export default router;