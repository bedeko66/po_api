let { sequelize } = require('../../config/mysql_db')
let Suppliers = require('../../models/suppliers/food/Suppliers')
const express = require('express');
const monthlyStockRouter = express.Router();

//MONTHLY STOCK ONLY
//stock by every suppliers >> /?stock_date="Jul-19"
monthlyStockRouter.get('/:stock_date/all', async (req, res) => {
    try {
        let stock_date = req.params.stock_date;

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

// //by Supplier
monthlyStockRouter.get('/:stock_date/:supplier', async (req, res) => {
    try {
        let supplier = req.params.supplier
        let stock_date = req.params.stock_date;
        let query = `SELECT * FROM ilec_api_db.Products_${supplier} INNER JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}";`
        let result = await sequelize.query(query);
        res.json(result)
    } catch (error) {
        console.log(error);
    }
});

//filter by any propterty on all suppliers by stock date
//http://localhost:5050/monthly/search/Jul-19/?Category&search_term=Fish
monthlyStockRouter.get('/search/:stock_date', async (req, res) => {
    try {

        let property = Object.keys(req.query)[0]
        console.log(property);
        //let valueOfProperty = Object.values(req.query[1])

        let stock_date = req.params.stock_date
        let search_term = req.query.search_term;
        // console.log(stock_date);
        // console.log(search_term);
        let arrOfSuppliers = Object.keys(Suppliers);
        console.log(arrOfSuppliers);
        let arrOfQuery = await arrOfSuppliers.map(async supplier => {
            let query = `SELECT * FROM ilec_api_db.Products_${supplier} INNER JOIN ilec_api_db.Stock_${supplier} ON ilec_api_db.Stock_${supplier}.Item_Code = ilec_api_db.Products_${supplier}.Item_Code AND ilec_api_db.Stock_${supplier}.Stock_Date = "${stock_date}" WHERE ilec_api_db.Products_${supplier}.${property} LIKE '%${search_term}%';`;
            return await sequelize.query(query);
        });

        let result = await Promise.all(arrOfQuery)
        res.json(result)

    } catch (error) {
        console.log(error);
    }
})
module.exports = monthlyStockRouter;
