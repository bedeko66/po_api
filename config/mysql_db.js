// //const mysql = require('mysql2/promise');

//--------------------
const { Sequelize } = require('sequelize');

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
    // pool: {
    //     max: 5,
    //     min: 0,
    //     aquire: 3000,
    //     idle: 10000
    // }
});

//require('../models/main/model.init')
// const db = seedDb(sequelize);

async function connect() {
    try {
        await sequelize.query(`CREATE SCHEMA IF NOT EXISTS \`${databaseSchema}\`;`);
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

async function syncronize() {
    await sequelize.sync()  //{ alter: true }
    console.log("All models were synchronized successfully.");
}

async function dropAllTables() {
    try {
        await sequelize.drop();
        console.log("All tables dropped!");

    } catch (error) {
        console.log(error)
    }
}
async function dropDb() {
    try {
        await sequelize.query(`DROP SCHEMA IF EXISTS \`${dbAuth.databaseSchema}\`;`);
        console.log("dbdropped!");

    } catch (error) {
        console.log(error)
    }
}

async function closeConn() {
    try {
        await sequelize.close()

    } catch (error) {
        console.log(error)
    }
}

//dropAllTables()
//dropDb()
//closeConn()

module.exports = { sequelize, connect, syncronize }
//global.db = db;


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




