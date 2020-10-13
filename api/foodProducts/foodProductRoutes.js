// // !!! Item_Code , Item_Group, Item_Description !!!

const express = require('express');
const router = express.Router();

const { Op } = require("sequelize");
const capitalize = require('../../helpers/helpers');
const Suppliers = require('../../models/suppliers/food/Suppliers')

const fs = require('fs');
const fsPromises = fs.promises;
let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'
//Join supplier tables get all products
router.get('/', async (req, res) => {
    try {
        let arrOfSuppliers = Object.keys(Suppliers);
        let arrOfProducts = await arrOfSuppliers.map(async supplier => {
            return await Suppliers[supplier].findAll()
        })

        let result = await Promise.all(arrOfProducts)
        res.json(result)

        //fs.writeFileSync(newJsonData, JSON.stringify(result));
        // let result = await Promise.all(arrOfSuppliers.map(async supplier => {
        //     return await Suppliers[supplier].findAll()
        // }))

    } catch (error) {
        console.error(error);
    }
});

//Query by properties on any selected supplier
//http://localhost:5050/products/food/Brakes/?Item_Description=cheese
router.get('/:supplier', async (req, res) => {
    try {

        let property = Object.keys(req.query)
        let valueOfProperty = Object.values(req.query)

        let query = {
            where: { [property]: { [Op.substring]: valueOfProperty } }
        };

        let supplier = req.params.supplier
        let queryResult = await Suppliers[supplier].findAll(query)
        res.json(queryResult)
    } catch (error) {
        console.error(error);
    }
});

//Select all items in a particular supplier
router.get('/:supplier/all', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Suppliers[supplier].findAll()
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Select single item by id
router.get('/:supplier/:id', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Suppliers[supplier].findAll({ where: { id: req.params.id } })
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Add item
router.post('/:supplier/add', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await Suppliers[supplier].create({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.json(product)

    } catch (error) {
        console.error(error);
    }

});

//Update item via id
router.put('/:supplier/:id', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await Suppliers[supplier].findByPk(req.params.id);
        await product.update({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.send(product)

    } catch (error) {
        console.error(error);
    }
});

//Delete item
router.delete('/:supplier/:id', async (req, res) => {
    try {

        let supplier = capitalize(req.params.supplier);
        let product = await Suppliers[supplier].findByPk(req.params.id);
        await product.destroy()

        res.sendStatus(200)

    } catch (error) {
        console.error(error);
    }
});


module.exports = router;