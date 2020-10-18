let { sequelize } = require('../../config/mysql_db')
const express = require('express');
const markingRoutes = express.Router();
let MarkedItems = require('../../models/orders/food/marked_items/MarkedItems')


markingRoutes.get('/', async (req, res) => {
    try {
        let result = await MarkedItems.findAll()
        res.json(result)

    } catch (error) {
        console.error(error);
    }
});

module.exports = markingRoutes;