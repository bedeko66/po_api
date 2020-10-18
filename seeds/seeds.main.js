let { doStockSeed } = require('./stock/stock.seed')
let { doSuppliersSeed } = require('./suppliers/suppliers.seed')
let { doOrdersSeed } = require('./orders/orders.seed')
let { doMarkedItemsSeed } = require('./marked_items/marked_items.seed')
let { doInvoices_foodSeed } = require('./invoices/food/invoices_food.seed')

const main_seed = async () => {
    try {
        await doStockSeed();
        await doSuppliersSeed();
        await doOrdersSeed();
        await doMarkedItemsSeed();
        await doInvoices_foodSeed();

    } catch (error) {
        console.log(error);
    }
}

//main_seed()