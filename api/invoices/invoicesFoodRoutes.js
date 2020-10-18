const express = require('express');
//const { sequelize } = require('../../config/mysql_db')
const foodInvoicesRouter = express.Router();
const { Op } = require("sequelize");
const capitalize = require('../../helpers/helpers');
const InvoicesFood = require('../../models/invoices/food/InvoicesFood')


//Join supplier tables get all products
foodInvoicesRouter.get('/', async (req, res) => {
    try {

        let arrOfInvoicesFood = Object.keys(InvoicesFood);

        let arrOfProducts = await arrOfInvoicesFood.map(async supplier => {
            return await InvoicesFood[supplier].findAll()
        })
        arrOfInvoicesFood.forEach(supplier => {
            //return await db.InvoicesFood[supplier].findAll()
            console.log(InvoicesFood[supplier]);
        })

        let result = await Promise.all(arrOfProducts)
        res.json(result)


        //fs.writeFileSync(newJsonData, JSON.stringify(result));
        // let result = await Promise.all(arrOfInvoicesFood.map(async supplier => {
        //     return await InvoicesFood[supplier].findAll()
        // }))

    } catch (error) {
        console.error(error);
    }
});

// //Query by properties on any selected supplier
// //http://localhost:5050/products/food/Brakes/?Item_Description=cheese
foodInvoicesRouter.get('/:supplier', async (req, res) => {
    try {

        let property = Object.keys(req.query)
        let valueOfProperty = Object.values(req.query)

        let query = {
            where: { [property]: { [Op.substring]: valueOfProperty } }
        };

        let supplier = req.params.supplier
        let queryResult = await InvoicesFood[supplier].findAll(query)
        res.json(queryResult)
    } catch (error) {
        console.error(error);
    }
});

//Select all items in a particular supplier
foodInvoicesRouter.get('/:supplier/all', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await InvoicesFood[supplier].findAll()
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Select single item by id
foodInvoicesRouter.get('/:supplier/:id', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await InvoicesFood[supplier].findAll({ where: { id: req.params.id } })
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Add item
foodInvoicesRouter.post('/:supplier/add', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await InvoicesFood[supplier].create({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.json(product)

    } catch (error) {
        console.error(error);
    }

});

//Update item via id
foodInvoicesRouter.put('/:supplier/:id', async (req, res) => {
    try {
        let { Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price } = req.body;

        let supplier = capitalize(req.params.supplier);
        let product = await InvoicesFood[supplier].findByPk(req.params.id);
        await product.update({ Supplier, Item_Group, Category, Bfs_Item, Item_Code, Item_Description, Size, Unit_ptn, Unit_mea, CS, Price })

        res.send(product)

    } catch (error) {
        console.error(error);
    }
});

//Delete item
foodInvoicesRouter.delete('/:supplier/:id', async (req, res) => {
    try {

        let supplier = capitalize(req.params.supplier);
        let product = await InvoicesFood[supplier].findByPk(req.params.id);
        await product.destroy()

        res.sendStatus(200)

    } catch (error) {
        console.error(error);
    }
});


module.exports = foodInvoicesRouter;