// //const mysql = require('mysql2/promise');

//--------------------
const Sequelize = require('sequelize');
require('dotenv').config()

const dbAuth = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TYPE,
    databaseSchema: process.env.DB_SCHEMA
};
const { host, port, user, password, database, databaseSchema } = dbAuth;

const sequelize = new Sequelize(databaseSchema, user, password, {
    host,
    port,
    dialect: database,

});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
const initialize_models = require('../models/main/model.init');
initialize_models(db, sequelize);
// db.Brakes = require('../models/suppliers/food/Suppliers_new')(sequelize);
// db.Stocks_Brakes = require('../models/stock/Stocks_new')(sequelize);

//Relations



async function connect() {
    try {
        await db.query(`CREATE SCHEMA IF NOT EXISTS \`${databaseSchema}\`;`);
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

async function syncronize() {
    await db.sync()  //{ alter: true }
    console.log("All models were synchronized successfully.");
}

async function dropAllTables() {
    try {
        await db.drop();
        console.log("All tables dropped!");

    } catch (error) {
        console.log(error)
    }
}
async function dropDb() {
    try {
        await db.query(`DROP SCHEMA IF EXISTS \`${dbAuth.databaseSchema}\`;`);
        console.log("dbdropped!");

    } catch (error) {
        console.log(error)
    }
}

async function closeConn() {
    try {
        await db.close()

    } catch (error) {
        console.log(error)
    }
}

//dropAllTables()
//dropDb()
//closeConn()

module.exports = db
global.db = db;


// const mysql = require('mysql2/promise');
// const { Sequelize } = require('sequelize');

// module.exports = db = {};

// require('dotenv').config()

// const dbAuth = {
//     dbType: process.env.DB_Type,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_SCHEMA
// };

// module.exports = async function initialize() {
//     // create db if it doesn't already exist
//     const { host, port, user, password, database } = dbAuth;
//     const connection = await mysql.createConnection({ host, port, user, password });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     db.Brakes = require('../models/suppliers/food/Brakes')(sequelize);

//     // sync all models with database
//     await sequelize.sync();
// }


//module.exports = db = {};

//initialize();
// require('dotenv').config()

// const dbAuth = {
//     //dbType: process.env.DB_TYPE,
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_SCHEMA
// };

// async function connect() {
//     // create db if it doesn't already exist
//     const { host, port, user, password, database } = dbAuth;
//     const connection = await mysql.createConnection({ host, port, user, password });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     //db.User = require('../users/user.model')(sequelize);

//     // sync all models with database
//     //await sequelize.sync();
// }




