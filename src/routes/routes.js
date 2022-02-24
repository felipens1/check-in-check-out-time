import { Router } from "express";
import User from '../models/User.js';
import { create, destroy, findAll, findById, update } from "../controllers/UserController.js";

const router = Router();

router.get('/users', findAll);
router.get('/user/:id', findById);
router.post('/user', create);
router.put('/user/:id', update);
router.delete('/user/:id', destroy);

export default router;