import { DataTypes, Model } from "sequelize";
const { sequelize } = require("../storage/storage")

class Token extends Model {}

Token.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: "users", key: "id"}
    }
}, {
    sequelize,
    timestamps: true,
    modelName: "token",
    tableName: "tokens"
})

export default Token