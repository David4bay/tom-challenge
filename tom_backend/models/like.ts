import { DataTypes, Model } from "sequelize"
const { sequelize } = require("../storage/storage")

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: "Like",
    tableName: "likes",
    timestamps: true
})

export default Like