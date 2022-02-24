import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

class TimeCard extends Model {}

TimeCard.init({
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
}, {
    sequelize
});

export default TimeCard;