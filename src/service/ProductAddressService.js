const {knex} = require('./KnexService');

const updateProductAddress = async (product, address) => {
     return knex.transaction(async function (trx) {
        try {
            await trx.insert(product, "productID").into('products');
            await trx.insert(address, "addressId").into('address');
            trx.commit;
        } catch (e) {
            console.error(e);
            trx.rollback;
            throw e;
        }
    })
};

module.exports = {
    updateProductAddress
}
