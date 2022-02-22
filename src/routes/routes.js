import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Funcionou!');
});

export default router;