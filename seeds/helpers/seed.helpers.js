const fs = require('fs');
const fsPromises = fs.promises;

module.exports = async function getJsonFiles() {
    try {
        return await fsPromises.readdir('./seeds/suppliers/json');

    } catch (err) {
        console.error('Error occured while reading directory!', err);

    }
};


function swapJsonFileData() {
    let newJsonData = '/Users/bedeko/Projects/ilec-pos-seq/seeds/helpers/Data.json'
    let jsonData = require('../seeds/suppliers/json/LaTuaPasta.json');

    let content = jsonData.map(d => {
        //if (Number.isInteger(d.Unit_mea)) {
        let ptn = Number(d.Unit_mea)
        let mea = d.Unit_ptn
        d.Unit_mea = mea;
        d.Unit_ptn = ptn
        //console.log('swapped');
        //}
        return d
    })

    fs.writeFileSync(newJsonData, JSON.stringify(content));

}
//swapJsonFileData()


