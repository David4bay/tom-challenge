import { DataTypes, Model } from "sequelize";
const { sequelize } = require("../storage/storage")

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    likedPhotos: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: []
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true
})

export default User