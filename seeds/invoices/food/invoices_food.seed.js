const { Invoices_food } = require('../../../models/invoices/food/InvoicesFood');
const { getJsonFilesForSeed } = require('../../helpers/seed.helpers');

const doInvoices_foodSeed = async () => {
    try {

        let files = await getJsonFilesForSeed('./seeds/invoices/food/json');
        files.forEach(async (file) => {
            if (file.includes('json')) {
                // let fileName = file.split('.')[0]

                try {
                    await Invoices_food.bulkCreate(require(`./json/${file}`));
                } catch (error) {
                    console.log(error)
                }
            }
        });

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    doInvoices_foodSeed
}
//doInvoices_foodSeed();







