// // !!! Item_Code , Item_Group, Item_Description !!!

const express = require('express');
const stocksRouter = express.Router();

const { Op } = require("sequelize");
const capitalize = require('../../helpers/helpers');
const Stocks = require('../../models/stock/Stocks')

const fs = require('fs');
const fsPromises = fs.promises;
let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'
//Join supplier tables get all products
stocksRouter.get('/', async (req, res) => {
    try {
        let arrOfStocks = Object.keys(Stocks);
        let arrOfProducts = await arrOfStocks.map(async supplier => {
            return await Stocks[supplier].findAll()
        })

        let result = await Promise.all(arrOfProducts)
        res.json(result)

        //fs.writeFileSync(newJsonData, JSON.stringify(result));
        // let result = await Promise.all(arrOfStocks.map(async supplier => {
        //     return await Stocks[supplier].findAll()
        // }))

    } catch (error) {
        console.error(error);
    }
});

//Query by properties on any selected supplier
//http://localhost:5050/products/food/Brakes/?Item_Description=cheese
stocksRouter.get('/:supplier', async (req, res) => {
    try {

        let property = Object.keys(req.query)
        let valueOfProperty = Object.values(req.query)

        let query = {
            where: { [property]: { [Op.substring]: valueOfProperty } }
        };

        let supplier = req.params.supplier
        let queryResult = await Stocks[supplier].findAll(query)
        res.json(queryResult)
    } catch (error) {
        console.error(error);
    }
});

//Select all items in a particular supplier
stocksRouter.get('/:supplier/all', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Stocks[supplier].findAll()
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Select single item by id
stocksRouter.get('/:supplier/:id', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Stocks[supplier].findAll({ where: { id: req.params.id } })
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Add item
stocksRouter.post('/:supplier/add', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await Stocks[supplier].create({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.json(product)

    } catch (error) {
        console.error(error);
    }

});

//Update item via id
stocksRouter.put('/:supplier/:id', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await Stocks[supplier].findByPk(req.params.id);
        await product.update({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.send(product)

    } catch (error) {
        console.error(error);
    }
});

//Delete item
stocksRouter.delete('/:supplier/:id', async (req, res) => {
    try {

        let supplier = capitalize(req.params.supplier);
        let product = await Stocks[supplier].findByPk(req.params.id);
        await product.destroy()

        res.sendStatus(200)

    } catch (error) {
        console.error(error);
    }
});


module.exports = stocksRouter;