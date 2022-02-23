import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import sequelize from './database/sequelize.js'

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}...`);
    });
});