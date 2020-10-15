//const { Model } = require('sequelize');
//const Sequelize = require('sequelize');
//const { db } = require('../../../config/postgres');

const { sequelize } = require('../../../config/mysql_db');
const productSchema = require('./product_schema');

module.exports = {
    Brakes: sequelize.define('Brakes', productSchema, {
        tableName: 'Products_Brakes',
        timestamps: false
    }),
    Reynolds: sequelize.define('Reynolds', productSchema, {
        tableName: 'Products_Reynolds',
        timestamps: false
    }),
    Kff: sequelize.define('Kff', productSchema, {
        tableName: 'Products_Kff',
        timestamps: false
    }),
    Chiltern: sequelize.define('Chiltern', productSchema, {
        tableName: 'Products_Chiltern',
        timestamps: false
    }),
    Dickenson: sequelize.define('Dickenson', productSchema, {
        tableName: 'Products_Dickenson',
        timestamps: false
    }),
    Express_Chef: sequelize.define('Express_Chef', productSchema, {
        tableName: 'Products_Express_Chef',
        timestamps: false
    }),
    La_Tua_Pasta: sequelize.define('La_Tua_Pasta', productSchema, {
        tableName: 'Products_La_Tua_Pasta',
        timestamps: false
    }),
    Nespresso: sequelize.define('Nespresso', productSchema, {
        tableName: 'Products_Nespresso',
        timestamps: false
    }),
    Olleco: sequelize.define('Olleco', productSchema, {
        tableName: 'Products_Olleco',
        timestamps: false
    }),
    Swithenbank: sequelize.define('Swithenbank', productSchema, {
        tableName: 'Products_Swithenbank',
        timestamps: false
    }),
    Tschibo: sequelize.define('Tschibo', productSchema, {
        tableName: 'Products_Tschibo',
        timestamps: false
    }),
    Direct_Seafood: sequelize.define('Direct_Seafood', productSchema, {
        tableName: 'Products_Direct_Seafood',
        timestamps: false
    })

}






//--------------------------------------------

// const Brakes = (sequelize) => {
//     sequelize.define('Brakes', productSchema, {
//         tableName: 'Products_Brakes',
//         timestamps: false
//     })
//     return Brakes

// }
// const Reynolds = (sequelize) => {
//     sequelize.define('Reynolds', productSchema, {
//         tableName: 'Products_Reynolds',
//         timestamps: false
//     })
//     return Reynolds
// }
// const Kff = (sequelize) => {
//     sequelize.define('Kff', productSchema, {
//         tableName: 'Products_Kff',
//         timestamps: false
//     })
//     return Kff
// }
// const Chiltern = (sequelize) => {
//     sequelize.define('Chiltern', productSchema, {
//         tableName: 'Products_Chiltern',
//         timestamps: false
//     })
//     return Olleco
// }
// const Dickenson = (sequelize) => {
//     sequelize.define('Dickenson', productSchema, {
//         tableName: 'Products_Dickenson',
//         timestamps: false
//     })
//     return Dickenson
// }
// const ExpressChef = (sequelize) => {
//     sequelize.define('ExpressChef', productSchema, {
//         tableName: 'Products_ExpressChef',
//         timestamps: false
//     })
//     return ExpressChef
// }
// const LaTuaPasta = (sequelize) => {
//     sequelize.define('LaTuaPasta', productSchema, {
//         tableName: 'Products_LaTuaPasta',
//         timestamps: false
//     })
//     return LaTuaPasta
// }
// const Nespresso = (sequelize) => {
//     sequelize.define('Nespresso', productSchema, {
//         tableName: 'Products_Nespresso',
//         timestamps: false
//     })
//     return Nespresso
// }
// const Olleco = (sequelize) => {
//     sequelize.define('Olleco', productSchema, {
//         tableName: 'Products_Olleco',
//         timestamps: false
//     })
//     return Olleco
// }
// const Swithenbank = (sequelize) => {
//     sequelize.define('Swithenbank', productSchema, {
//         tableName: 'Products_Swithenbank',
//         timestamps: false
//     })
//     return Swithenbank
// }
// const Tschibo = (sequelize) => {
//     sequelize.define('Tschibo', productSchema, {
//         tableName: 'Products_Tschibo',
//         timestamps: false
//     })
//     return Tschibo
// }
// const Direct_Seafood = (sequelize) => {
//     sequelize.define('Direct_Seafood', productSchema, {
//         tableName: 'Products_Direct_Seafood',
//         timestamps: false
//     })
//     return Direct_Seafood
// }

// module.exports = {
//     Brakes,
//     Reynolds,
//     Kff,
//     Chiltern,
//     Dickenson,
//     ExpressChef,
//     LaTuaPasta,
//     Nespresso,
//     Olleco,
//     Swithenbank,
//     Tschibo,
//     Direct_Seafood
// }

