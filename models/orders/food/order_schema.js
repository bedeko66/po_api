const { DataTypes } = require('sequelize');

module.exports = {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    OrderTime_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DeliveryFor_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OrderedBy_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OrderId_: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OrderTotal_: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Supplier_: {
        type: DataTypes.STRING
    },
    Code_: {
        type: DataTypes.STRING
    },
    Description_: {
        type: DataTypes.STRING
    },
    Size_: {
        type: DataTypes.STRING
    },
    CS_: {
        type: DataTypes.STRING
    },
    Price_: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Quantity_: {
        type: DataTypes.DECIMAL(10, 2)
    },
    QtyTotal_: {
        type: DataTypes.DECIMAL(10, 2)
    },
    AllocatedTo_: {
        type: DataTypes.STRING
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