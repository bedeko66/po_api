const { sequelize } = require('../../config/mysql_db');
//const db = require('../../config/database');

//const { db } = require('../../../config/postgres');
const stockSchema = require('./stock_schema');

module.exports = {
    Stock_Brakes: sequelize.define('Stock_Brakes', stockSchema, {
        tableName: 'Stock_Brakes',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Reynolds: sequelize.define('Stock_Reynolds', stockSchema, {
        tableName: 'Stock_Reynolds',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Kff: sequelize.define('Stock_Kff', stockSchema, {
        tableName: 'Stock_Kff',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Chiltern: sequelize.define('Stock_Chiltern', stockSchema, {
        tableName: 'Stock_Chiltern',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Dickenson: sequelize.define('Stock_Dickenson', stockSchema, {
        tableName: 'Stock_Dickenson',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Express_Chef: sequelize.define('Stock_Express_Chef', stockSchema, {
        tableName: 'Stock_Express_Chef',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_La_Tua_Pasta: sequelize.define('Stock_La_Tua_Pasta', stockSchema, {
        tableName: 'Stock_La_Tua_Pasta',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Nespresso: sequelize.define('Stock_Nespresso', stockSchema, {
        tableName: 'Stock_Nespresso',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Olleco: sequelize.define('Stock_Olleco', stockSchema, {
        tableName: 'Stock_Olleco',
        timestamps: false
    }),
    Stock_Swithenbank: sequelize.define('Stock_Swithenbank', stockSchema, {
        tableName: 'Stock_Swithenbank',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Tschibo: sequelize.define('Stock_Tschibo', stockSchema, {
        tableName: 'Stock_Tschibo',
        timestamps: false,
        freezeTableName: true
    }),
    Stock_Direct_Seafood: sequelize.define('Stock_Direct_Seafood', stockSchema, {
        tableName: 'Stock_Direct_Seafood',
        timestamps: false,
        freezeTableName: true
    })

}

//---------------------------
// const stockSchema = require('./stock_schema');

// const StockBrakes = db.define('Stock_Brakes', stockSchema, {
//     tableName: 'Stock_Brakes',
//     timestamps: false
// })
// const StockReynolds = db.define('Stock_Reynolds', stockSchema, {
//     tableName: 'Stock_Reynolds',
//     timestamps: false
// })
// const StockKff = db.define('Stock_Kff', stockSchema, {
//     tableName: 'Stock_Kff',
//     timestamps: false
// })
// const StockChiltern = db.define('Stock_Chiltern', stockSchema, {
//     tableName: 'Stock_Chiltern',
//     timestamps: false
// })
// const StockDickenson = db.define('Stock_Dickenson', stockSchema, {
//     tableName: 'Stock_Dickenson',
//     timestamps: false
// })
// const StockExpressChef = db.define('Stock_ExpressChef', stockSchema, {
//     tableName: 'Stock_ExpressChef',
//     timestamps: false
// })
// const StockLaTuaPasta = db.define('Stock_LaTuaPasta', stockSchema, {
//     tableName: 'Stock_LaTuaPasta',
//     timestamps: false
// })
// const StockNespresso = db.define('Stock_Nespresso', stockSchema, {
//     tableName: 'Stock_Nespresso',
//     timestamps: false
// })
// const StockOlleco = db.define('Stock_Olleco', stockSchema, {
//     tableName: 'Stock_Olleco',
//     timestamps: false
// })
// const StockSwithenbank = db.define('Stock_Swithenbank', stockSchema, {
//     tableName: 'Stock_Swithenbank',
//     timestamps: false
// })
// const StockTschibo = db.define('Stock_Tschibo', stockSchema, {
//     tableName: 'Stock_Tschibo',
//     timestamps: false
// })
// const StockDirect_Seafood = db.define('Stock_Direct_Seafood', stockSchema, {
//     tableName: 'Stock_Direct_Seafood',
//     timestamps: false
// })

// module.exports = {
//     StockBrakes,
//     StockReynolds,
//     StockKff,
//     StockChiltern,
//     StockDickenson,
//     StockExpressChef,
//     StockLaTuaPasta,
//     StockNespresso,
//     StockOlleco,
//     StockSwithenbank,
//     StockTschibo,
//     StockDirect_Seafood
// }
