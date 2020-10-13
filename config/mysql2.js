const mysql = require('mysql2');
require('dotenv').config()

const dbAuth = {
    dbType: process.env.DB_Type,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
};
const { host, port, user, password, database } = dbAuth;

// const connection = mysql.createConnection({
//     host,
//     user,
//     password
// });

//connection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbAuth.database}\`;`);
// connection.query(
//     `CREATE DATABASE IF NOT EXISTS \`${dbAuth.database}\`;`,
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         //console.log(fields); // fields contains extra meta data about results, if available
//     }
// );
// async function init() {
//     // get the client
//     // create the connection
//     await mysql.createConnection({ host, user, password });
//     // query database
//     return await mysql.execute(`CREATE DATABASE IF NOT EXISTS \`${dbAuth.database}\`;`);
// }

// init()

