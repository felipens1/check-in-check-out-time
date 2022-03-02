import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
});

export default User;