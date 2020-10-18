const fs = require('fs');
const fsPromises = fs.promises;

async function getJsonFilesForSeed(jsonFilePath) {
    try {
        return await fsPromises.readdir(jsonFilePath);

    } catch (err) {
        console.error('Error occured while reading directory!', err);

    }
};

module.exports = {
    getJsonFilesForSeed
}

function swapJsonFileData() {
    let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'
    let jsonData = require('../invoices/food/json/invoices_food.json');

    let content = jsonData.map(d => {
        if (!Number.isInteger(d.Other)) {
            let qty = Number(d.Other)
            d.Other = qty
            console.log('qty swapped');
        }
        // if (!Number.isInteger(d.Purchase_Qty)) {
        //     let opening = Number(d.Purchase_Qty)
        //     d.Purchase_Qty = opening
        //     console.log('purchase swapped');
        // }
        // if (!Number.isInteger(d.Closing_Qty)) {
        //     let opening = Number(d.Closing_Qty)
        //     d.Closing_Qty = opening
        //     console.log('closing swapped');
        // }
        return d
    })

    fs.writeFileSync(newJsonData, JSON.stringify(content));

}
//swapJsonFileData()


