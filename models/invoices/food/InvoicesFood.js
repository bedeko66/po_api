//const { db } = require('../../../config/postgres');
const { sequelize } = require('../../../config/mysql_db');
const invoices_food_schema = require('./invoices_food_schema');

module.exports = {
    Invoices_food: sequelize.define('Invoices_food', invoices_food_schema, {
        tableName: 'Invoices_food',
        timestamps: false
    }),
}
