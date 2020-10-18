let { sequelize } = require('../../config/mysql_db')
const express = require('express');
const ordersRouter = express.Router();
let Orders = require('../../models/orders/food/Orders')

//Join supplier tables get all products
ordersRouter.get('/', async (req, res) => {
    try {

        let arrOfSuppliers = Object.keys(Suppliers);

        let arrOfProducts = await arrOfSuppliers.map(async supplier => {
            return await Suppliers[supplier].findAll()
        })
        arrOfSuppliers.forEach(supplier => {
            //return await db.Suppliers[supplier].findAll()
            console.log(Suppliers[supplier]);
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

// //Query by properties on any selected supplier
// //http://localhost:5050/products/food/Brakes/?Item_Description=cheese
ordersRouter.get('/:supplier', async (req, res) => {
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
ordersRouter.get('/:supplier/all', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Suppliers[supplier].findAll()
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Select single item by id
ordersRouter.get('/:supplier/:id', async (req, res) => {
    try {
        let supplier = capitalize(req.params.supplier)
        let result = await Suppliers[supplier].findAll({ where: { id: req.params.id } })
        res.json(result)
    } catch (error) {
        console.error(error);
    }
});

//Add item
ordersRouter.post('/:supplier/add', async (req, res) => {
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
ordersRouter.put('/:supplier/:id', async (req, res) => {
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
ordersRouter.delete('/:supplier/:id', async (req, res) => {
    try {

        let supplier = capitalize(req.params.supplier);
        let product = await Suppliers[supplier].findByPk(req.params.id);
        await product.destroy()

        res.sendStatus(200)

    } catch (error) {
        console.error(error);
    }
});


module.exports = ordersRouter;
