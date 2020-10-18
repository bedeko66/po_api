const { Orders_food } = require('../../models/orders/food/Orders');
const { getJsonFilesForSeed } = require('../helpers/seed.helpers');

const doOrdersSeed = async () => {
    try {

        let files = await getJsonFilesForSeed('./seeds/orders/json');
        files.forEach(async (file) => {
            if (file.includes('json')) {
                // let fileName = file.split('.')[0]

                try {
                    await Orders_food.bulkCreate(require(`./json/${file}`));
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
    doOrdersSeed
}
//doOrdersSeed();







