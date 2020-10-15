const fs = require('fs');
const fsPromises = fs.promises;

async function getJsonFilesForSuppliers() {
    try {
        return await fsPromises.readdir('./seeds/suppliers/json');

    } catch (err) {
        console.error('Error occured while reading directory!', err);

    }
};
async function getJsonFilesForStocks() {
    try {
        return await fsPromises.readdir('./seeds/stock/json');

    } catch (err) {
        console.error('Error occured while reading directory!', err);

    }
};
module.exports = {
    getJsonFilesForSuppliers,
    getJsonFilesForStocks
}

function swapJsonFileData() {
    let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'
    let jsonData = require('../stock/json/Stock_Tschibo.json');

    let content = jsonData.map(d => {
        if (Number.isInteger(d.Item_Code)) {
            let code = String(d.Item_Code)
            d.Item_Code = code
            console.log('code swapped');
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


