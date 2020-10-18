const { MarkedItems } = require('../../models/orders/food/marked_items/MarkedItems');
const { getJsonFilesForSeed } = require('../helpers/seed.helpers');

const doMarkedItemsSeed = async () => {
    try {

        let files = await getJsonFilesForSeed('./seeds/marked_items/json');
        files.forEach(async (file) => {
            if (file.includes('json')) {
                // let fileName = file.split('.')[0]

                try {
                    await MarkedItems.bulkCreate(require(`./json/${file}`));
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
    doMarkedItemsSeed
}
//doMarkedItemsSeed();







