const express = require('express');
const apiRouter = express.Router();

const foodProductsRouter = require('./foodProducts/foodProductRoutes')
const stocksRouter = require('./stocks/stocksRoutes')
const inventoryRouter = require('./inventory/inventoryRoutes')
const monthlyStockRouter = require('./inventory/monthlyStockRoutes')
const ordersRouter = require('./orders/ordersFoodRoutes')
const markingRoutes = require('./orders/markingRoutes')
const foodInvoicesRouter = require('./invoices/invoicesFoodRoutes')


apiRouter.use("/products/food", foodProductsRouter);
apiRouter.use("/stocks", stocksRouter);
apiRouter.use("/inventory", inventoryRouter);
apiRouter.use("/monthly", monthlyStockRouter);
apiRouter.use("/orders", ordersRouter);
apiRouter.use("/invoices/food", foodInvoicesRouter);


module.exports = apiRouter;
