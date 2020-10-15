let { sequelize } = require('../../config/mysql_db')
let Stocks = require('../../models/stock/Stocks')
let Suppliers = require('../../models/suppliers/food/Suppliers')
const express = require('express');
const inventoryRouter = express.Router();

//Suppliers.Brakes.hasMany(Stocks.Stock_Brakes, { foreignKey: 'i_code' })
//Stocks.Stock_Brakes.belongsTo(Suppliers.Brakes.hasMany, { foreignKey: 'i_code' })

//inventory by every suppliers
inventoryRouter.get('/', async (req, res) => {
    try {
        let stock_date = Object.values(req.query)[0];

        let arrOfSuppliers = Object.keys(Suppliers);
        console.log(arrOfSuppliers);
        let arrOfQuery = await arrOfSuppliers.map(async supplier => {
            let query = `SELECT * FROM ilec_api_db.Products_${supplier} LEFT JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}";`;
            return await sequelize.query(query);
        });

        let result = await Promise.all(arrOfQuery)
        res.json(result)
        //res.sendStatus(200)
    } catch (error) {
        console.log(error);
    }
})

//by Supplier
inventoryRouter.get('/:supplier', async (req, res) => {
    try {
        let supplier = req.params.supplier
        let stock_date = Object.values(req.query)[0];
        //console.log(Object.values(req.query)[0]);
        let query = `SELECT * FROM ilec_api_db.Products_${supplier} LEFT JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}";`
        let result = await sequelize.query(query);
        res.json(result)
    } catch (error) {
        console.log(error);
    }
})

//MONTHLY STOCK ONLY
//stock by every suppliers
inventoryRouter.get('/monthly/', async (req, res) => {
    try {
        let stock_date = Object.values(req.query)[0];

        let arrOfSuppliers = Object.keys(Suppliers);
        console.log(arrOfSuppliers);
        let arrOfQuery = await arrOfSuppliers.map(async supplier => {
            let query = `SELECT * FROM ilec_api_db.Products_${supplier} INNER JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}";`;
            return await sequelize.query(query);
        });

        let result = await Promise.all(arrOfQuery)
        res.json(result)
    } catch (error) {
        console.log(error);
    }
})

//by Supplier
inventoryRouter.get('/monthly/:supplier', async (req, res) => {
    try {
        let supplier = req.params.supplier
        let stock_date = Object.values(req.query)[0];
        let query = `SELECT * FROM ilec_api_db.Products_${supplier} INNER JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}";`
        let result = await sequelize.query(query);
        res.json(result)
    } catch (error) {
        console.log(error);
    }
})
module.exports = inventoryRouter;
