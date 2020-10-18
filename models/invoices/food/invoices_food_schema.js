const { DataTypes } = require('sequelize');

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
    Supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Invoice_Number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Invoice_Date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Order_Number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Item_Code: {
        type: DataTypes.STRING
    },
    Quantity: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Item_Price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Total_Value: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Total_Stock_Invoice: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Invoice_Total: {
        type: DataTypes.DECIMAL(10, 2)
    },
    VAT: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Other: {
        type: DataTypes.DECIMAL(10, 2)
    }
}

