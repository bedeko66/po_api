//const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const { db } = require('../../../config/database');
//const { db } = require('../../../config/postgres');

const productSchema = require('./product_schema');

// module.exports = {
//     Brakes: db.define('Brakes', productSchema, {
//         tableName: 'Products_Brakes',
//         timestamps: false
//     }),
//     Reynolds: db.define('Reynolds', productSchema, {
//         tableName: 'Products_Reynolds',
//         timestamps: false
//     }),
//     Kff: db.define('Kff', productSchema, {
//         tableName: 'Products_Kff',
//         timestamps: false
//     }),
//     Chiltern: db.define('Chiltern', productSchema, {
//         tableName: 'Products_Chiltern',
//         timestamps: false
//     }),
//     Dickenson: db.define('Dickenson', productSchema, {
//         tableName: 'Products_Dickenson',
//         timestamps: false
//     }),
//     ExpressChef: db.define('ExpressChef', productSchema, {
//         tableName: 'Products_ExpressChef',
//         timestamps: false
//     }),
//     LaTuaPasta: db.define('LaTuaPasta', productSchema, {
//         tableName: 'Products_LaTuaPasta',
//         timestamps: false
//     }),
//     Nespresso: db.define('Nespresso', productSchema, {
//         tableName: 'Products_Nespresso',
//         timestamps: false
//     }),
//     Olleco: db.define('Olleco', productSchema, {
//         tableName: 'Products_Olleco',
//         timestamps: false
//     }),
//     Swithenbank: db.define('Swithenbank', productSchema, {
//         tableName: 'Products_Swithenbank',
//         timestamps: false
//     }),
//     Tschibo: db.define('Tschibo', productSchema, {
//         tableName: 'Products_Tschibo',
//         timestamps: false
//     }),
//     Direct_Seafood: db.define('Direct_Seafood', productSchema, {
//         tableName: 'Products_Direct_Seafood',
//         timestamps: false
//     })

// }






//--------------------------------------------

const Brakes = db.define('Brakes', productSchema, {
    tableName: 'Products_Brakes',
    timestamps: false
})
const Reynolds = db.define('Reynolds', productSchema, {
    tableName: 'Products_Reynolds',
    timestamps: false
})
const Kff = db.define('Kff', productSchema, {
    tableName: 'Products_Kff',
    timestamps: false
})
const Chiltern = db.define('Chiltern', productSchema, {
    tableName: 'Products_Chiltern',
    timestamps: false
})
const Dickenson = db.define('Dickenson', productSchema, {
    tableName: 'Products_Dickenson',
    timestamps: false
})
const ExpressChef = db.define('ExpressChef', productSchema, {
    tableName: 'Products_ExpressChef',
    timestamps: false
})
const LaTuaPasta = db.define('LaTuaPasta', productSchema, {
    tableName: 'Products_LaTuaPasta',
    timestamps: false
})
const Nespresso = db.define('Nespresso', productSchema, {
    tableName: 'Products_Nespresso',
    timestamps: false
})
const Olleco = db.define('Olleco', productSchema, {
    tableName: 'Products_Olleco',
    timestamps: false
})
const Swithenbank = db.define('Swithenbank', productSchema, {
    tableName: 'Products_Swithenbank',
    timestamps: false
})
const Tschibo = db.define('Tschibo', productSchema, {
    tableName: 'Products_Tschibo',
    timestamps: false
})
const Direct_Seafood = db.define('Direct_Seafood', productSchema, {
    tableName: 'Products_Direct_Seafood',
    timestamps: false
})

module.exports = {
    Brakes,
    Reynolds,
    Kff,
    Chiltern,
    Dickenson,
    ExpressChef,
    LaTuaPasta,
    Nespresso,
    Olleco,
    Swithenbank,
    Tschibo,
    Direct_Seafood
}

