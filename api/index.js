const express = require('express');
const apiRouter = express.Router();

const foodProductsRouter = require('./foodProducts/foodProductRoutes')
const stocksRouter = require('./stocks/stocksRoutes')
const inventoryRouter = require('./inventory/inventoryRoutes')
const monthlyStockRouter = require('./inventory/monthlyStockRoutes')

apiRouter.use("/products/food", foodProductsRouter);
apiRouter.use("/stocks", stocksRouter);
apiRouter.use("/inventory", inventoryRouter);
apiRouter.use("/monthly", monthlyStockRouter);


module.exports = apiRouter;
