
module.exports = async () => {
    try {
        const Suppliers = require('../suppliers/food/Suppliers')
        const Stocks = require('../stock/Stocks')
        //const { Olleco } = require('../suppliers/food/Suppliers')
        //const { Stock_Olleco } = require('../stock/Stocks')
        // Olleco.hasMany(Stock_Olleco, { foreignKey: 'prod_Code', foreignKeyConstraint: true, joinTableName: "Stock_Olleco" })
        //Stock_Olleco.belongsTo(Olleco, { foreignKey: 'prod_Code', joinTableName: "Stock_Olleco" })

    } catch (error) {
        console.log(error);
    }

}


//Brakes.hasMany(Stock_Brakes, { foreignKey: 'prod_code', joinTableName: "Stock_Brakes" })
//Stock_Brakes.belongsTo(Brakes, { foreignKey: { "Item_Code": "id" }, joinTableName: "Products_Brakes" })


//Label.hasMany(Article, { foreignKey: "label_id", joinTableName: "item_label" });
//Article.hasMany(Label, { foreignKey: { "item_id": "id", "item": "item_key" }, joinTableName: "item_label" });
//foreignKey: { name: 'id_venue', allowNull: false }


// const { Sequelize } = require('sequelize');

// const seedDb = (sequelize) => {
//     const db = {};
//     db.Sequelize = Sequelize;
//     db.sequelize = sequelize;
//     const { Brakes,
//         Reynolds,
//         Kff,
//         Chiltern,
//         Dickenson,
//         ExpressChef,
//         LaTuaPasta,
//         Nespresso,
//         Olleco,
//         Swithenbank,
//         Tschibo,
//         Direct_Seafood } = require('../suppliers/food/Suppliers')

//     db.Suppliers = {
//         Brakes: Brakes(sequelize),
//         Reynolds: Reynolds(sequelize),
//         Kff: Kff(sequelize),
//         Chiltern: Chiltern(sequelize),
//         Dickenson: Dickenson(sequelize),
//         ExpressChef: ExpressChef(sequelize),
//         LaTuaPasta: LaTuaPasta(sequelize),
//         Nespresso: Nespresso(sequelize),
//         Olleco: Olleco(sequelize),
//         Swithenbank: Swithenbank(sequelize),
//         Tschibo: Tschibo(sequelize),
//         Direct_Seafood: Direct_Seafood(sequelize)    //db.Stock = require('../stock/Stocks')

//     }

//     return db
// }

// module.exports = seedDb;