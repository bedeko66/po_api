const { DataTypes } = require('sequelize');

module.exports = {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Item_Code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}