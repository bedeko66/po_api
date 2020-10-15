const { DataTypes } = require('sequelize');

// "Stock_Date": "Jul-19",
// "Code": "84810",
// "Opening_Qty": "3",
// "Purchase_Qty": "21",
// "Closing_Qty": "4.7"

module.exports = {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Stock_Date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Item_Code: {
        type: DataTypes.STRING,
        // references: {
        //     //model: 'Products_Olleco', // 'persons' refers to table name
        //     key: 'id', // 'id' refers to column name in persons table
        // }
    },
    Opening_Qty: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Purchase_Qty: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Closing_Qty: {
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