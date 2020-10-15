const { DataTypes } = require('sequelize');

module.exports = {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Item_Group: {
        type: DataTypes.STRING
    },
    Category: {
        type: DataTypes.STRING
    },
    Bfs_Item: {
        type: DataTypes.BOOLEAN
    },
    Item_Code: {
        type: DataTypes.STRING
    },
    Item_Description: {
        type: DataTypes.STRING
    },
    Size: {
        type: DataTypes.STRING
    },
    Unit_ptn: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Unit_mea: {
        type: DataTypes.STRING
    },
    CS: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2)
    }
}

// p_Supplier VARCHAR(100),
// p_Item_Group VARCHAR(100),
// p_Category VARCHAR(100),
// p_Bfs_Item TINYINT,
// p_Item_Code VARCHAR(7),
// p_Item_Description VARCHAR(62),
// p_Size VARCHAR(16),
// p_Unit_ptn DECIMAL(7,2),
// p_Unit_mea VARCHAR(7),
// p_CS VARCHAR(1),
// p_Price DECIMAL(5,2)