const { Model, DataTypes } = require("sequelize")

const { sequelize } = require("../storage/storage")

class Photo extends Model {}
Photo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    authorId: {
        
    }
})