const Suppliers = require('../../models/suppliers/food/Suppliers');
const { getJsonFilesForSeed } = require('../helpers/seed.helpers');

const doSuppliersSeed = async () => {
    try {
        let files = await getJsonFilesForSeed('./seeds/suppliers/json');
        files.forEach(async (file) => {
            if (file.includes('json')) {
                let fileName = file.split('.')[0]

                try {
                    await Suppliers[fileName].bulkCreate(require(`./json/${file}`));
                } catch (error) {
                    console.log(error)
                }
                //console.log('done if in for each');
            }
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    doSuppliersSeed
}
//doSuppliersSeed();


// const seed = async (file) => {
//     const kffData = await Kff.bulkCreate(jsonKff);
//     console.log(kffData.length);
// }







//doSeed();



//-----------------------------------------------------
//const csvBrakes = require('./Brakes.csv')
//const csvKff = require('./Kff.csv')
// const connection = require('../../config/mysql2');
// const fs = require("fs");
// const fastcsv = require("fast-csv"); 

// let stream = fs.createReadStream(csvKff);
// let csvData = [];
// let csvStream = fastcsv
//   .parse()
//   .on("data", function(data) {
//     csvData.push(data);
//   })
//   .on("end", function() {
//     // remove the first line: header
//     csvData.shift();




//-------------------------------------------------
// async function convertBrakesToJSON() {
//             const jsonBrakes = await csv().fromFile(csvBrakes);
//             console.log(jsonBrakes);
//         }


