import { DataTypes, Model } from "sequelize"
const { sequelize } = require("../storage/storage")

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photoId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "photos",
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
    timestamps: true
})

export default Comment