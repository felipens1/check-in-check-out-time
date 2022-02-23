import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize
});

export default User;