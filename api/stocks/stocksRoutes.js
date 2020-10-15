// // !!! Item_Code , Item_Group, Item_Description !!!

const express = require('express');
const stocksRouter = express.Router();

const { Op } = require("sequelize");
const capitalize = require('../../helpers/helpers');
const Stocks = require('../../models/stock/Stocks')

//const fs = require('fs');
//const db = require('../../config/mysql_db');
// const fsPromises = fs.promises;
// let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'

//Join stock tables get all products
stocksRouter.get('/', async (req, res) => {
    try {
        let arrOfStocks = Object.keys(Stocks);
        let arrOfProducts = await arrOfStocks.map(async stock => {
            return await Stocks[stock].findAll()
        })

        let result = await Promise.all(arrOfProducts)
        res.json(result)

        //fs.writeFileSync(newJsonData, JSON.stringify(result));
        // let result = await Promise.all(arrOfStocks.map(async stock => {
        //     return await Stocks[stock].findAll()
        // }))

    } catch (error) {
        console.error(error);
    }
});

//Query by properties on any selected stock
//http://localhost:5050/products/food/Brakes/?Item_Description=cheese
stocksRouter.get('/:stock', async (req, res) => {
    try {

        let property = Object.keys(req.query)
        let valueOfProperty = Object.values(req.query)

        let query = {
            where: { [property]: { [Op.substring]: valueOfProperty } }
        };

        let stock = req.params.stock
        let queryResult = await Stocks[stock].findAll(query)
        res.json(queryResult)
    } catch (error) {
        console.error(error);
    }
});

//Select all items in a particular stock
stocksRouter.get('/:stock/all', async (req, res) => {
    try {
        let stock = capitalize(req.params.stock)
        let result = await Stocks[stock].findAll()
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Select single item by id
stocksRouter.get('/:stock/:id', async (req, res) => {
    try {
        let stock = capitalize(req.params.stock)
        let result = await Stocks[stock].findAll({ where: { id: req.params.id } })
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Add item
stocksRouter.post('/:stock/add', async (req, res) => {
    try {
        let { Stock_Date, Item_Code, Opening_Qty, Purchase_Qty, Closing_Qty } = req.body;

        let stock = capitalize(req.params.stock);
        let product = await Stocks[stock].create({ Stock_Date, Item_Code, Opening_Qty, Purchase_Qty, Closing_Qty })

        res.json(product)

    } catch (error) {
        console.error(error);
    }

});

//Update item via id
stocksRouter.put('/:stock/:id', async (req, res) => {
    try {
        let { Stock_Date, Item_Code, Opening_Qty, Purchase_Qty, Closing_Qty } = req.body;

        let stock = capitalize(req.params.stock);
        let product = await Stocks[stock].findByPk(req.params.id);
        await product.update({ Stock_Date, Item_Code, Opening_Qty, Purchase_Qty, Closing_Qty })

        res.send(product)

    } catch (error) {
        console.error(error);
    }
});

//Delete item
stocksRouter.delete('/:stock/:id', async (req, res) => {
    try {

        let stock = capitalize(req.params.stock);
        let product = await Stocks[stock].findByPk(req.params.id);
        await product.destroy()

        res.sendStatus(200)

    } catch (error) {
        console.error(error);
    }
});


module.exports = stocksRouter;