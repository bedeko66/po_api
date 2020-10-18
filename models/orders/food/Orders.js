//const { db } = require('../../../config/postgres');
const { sequelize } = require('../../../config/mysql_db');
const orderSchema = require('./order_schema');

module.exports = {
    Orders_food: sequelize.define('Orders_food', orderSchema, {
        tableName: 'Orders_food',
        timestamps: false
    }),
}
