const { Model, DataTypes } = require("sequelize")

const { sequelize } = require("../storage/storage")

class Photo extends Model {}
Photo.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    authorId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: []
    },
    total: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: []
    }
}, {
    sequelize,
    modelName: "Photo",
    tableName: "photos",
    timestamps: true
})

export default Photo