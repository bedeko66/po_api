let { doStockSeed } = require('./stock/stock.seed')
let { doSuppliersSeed } = require('./suppliers/suppliers.seed')

const main_seed = async () => {
    try {
        await doStockSeed();
        await doSuppliersSeed()

    } catch (error) {
        console.log(error);
    }
}

main_seed()