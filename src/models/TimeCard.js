import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";
import User from "./User.js";

const TimeCard = sequelize.define('TimeCards', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    checkInTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOutTime: {
        type: DataTypes.DATE,
        allowNull: false
    }    
});

TimeCard.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

export default TimeCard;