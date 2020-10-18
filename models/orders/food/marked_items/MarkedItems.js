//const { db } = require('../../../config/postgres');
const { sequelize } = require('../../../../config/mysql_db');
const marked_items_Schema = require('./marked_items_schema');

module.exports = {
    MarkedItems: sequelize.define('MarkedItems', marked_items_Schema, {
        tableName: 'MarkedItems',
        timestamps: false
    }),
}